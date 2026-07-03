export default async function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // 1. Bypass authentication for login.html and favicon.ico
  if (path === '/login.html' || path === '/favicon.ico') {
    return;
  }

  // 2. Intercept POST requests to /login for credential validation
  if (path === '/login' && request.method === 'POST') {
    try {
      const formData = await request.formData();
      const username = formData.get('username') || '';
      const password = formData.get('password') || '';

      // Get credentials from environment variables set in Vercel
      const expectedUser = process.env.AUTH_USER || 'admin';
      const expectedPass = process.env.AUTH_PASS || 'admin123';

      if (username === expectedUser && password === expectedPass) {
        // Correct credentials: set cookie and redirect to dashboard (/)
        return new Response(null, {
          status: 302,
          headers: {
            'Location': '/',
            'Set-Cookie': 'session=authenticated; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=Strict'
          }
        });
      } else {
        // Invalid credentials: redirect back with error parameter
        return new Response(null, {
          status: 302,
          headers: {
            'Location': '/login.html?error=1'
          }
        });
      }
    } catch (err) {
      console.error('Error parsing login request form data:', err);
      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/login.html?error=1'
        }
      });
    }
  }

  // 3. Verify session cookie for other page routes
  const cookieHeader = request.headers.get('cookie') || '';
  const cookies = parseCookies(cookieHeader);
  const session = cookies['session'];

  if (session === 'authenticated') {
    // Valid session: allow request to proceed
    return;
  }

  // 4. Unauthorized: redirect to /login.html with 307 Temporary Redirect status
  return new Response(null, {
    status: 307,
    headers: {
      'Location': '/login.html'
    }
  });
}

// Cookie parser utility function
function parseCookies(cookieHeader) {
  const list = {};
  if (!cookieHeader) return list;

  cookieHeader.split(';').forEach(cookie => {
    const parts = cookie.split('=');
    const name = parts.shift().trim();
    const val = parts.join('=').trim();
    if (name) {
      list[name] = decodeURIComponent(val);
    }
  });

  return list;
}
