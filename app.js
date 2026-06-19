// Initialize Mermaid.js configuration for dark theme UML rendering
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' }
});

// App State Management
const state = {
  currentModuleId: "mod-0",
  completedModules: [], // Array of completed module IDs
  quizScores: {}, // Dictionary of { moduleId: score }
  totalModulesCount: learningModules.length
};

// DOM Elements
const sidebar = document.getElementById("sidebar");
const hamburgerBtn = document.getElementById("hamburger-btn");
const searchInput = document.getElementById("search-input");
const contentBody = document.getElementById("content-body");
const moduleNavList = document.getElementById("module-nav-list");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  loadProgressFromStorage();
  renderSidebar();
  loadModule(state.currentModuleId);
  setupEventListeners();
  updateProgressBar();
});

// Load state from localStorage
function loadProgressFromStorage() {
  const completed = localStorage.getItem("sad_completed_modules");
  if (completed) {
    state.completedModules = JSON.parse(completed);
  } else {
    // If no progress is stored, default to empty
    state.completedModules = [];
  }

  const scores = localStorage.getItem("sad_quiz_scores");
  if (scores) {
    state.quizScores = JSON.parse(scores);
  }
}

// Save progress to localStorage
function saveProgressToStorage() {
  localStorage.setItem("sad_completed_modules", JSON.stringify(state.completedModules));
  localStorage.setItem("sad_quiz_scores", JSON.stringify(state.quizScores));
}

// Render the Sidebar menu items dynamically
function renderSidebar() {
  moduleNavList.innerHTML = "";
  
  let currentGroup = "";
  
  learningModules.forEach((mod, idx) => {
    // Add group headers if group changes
    if (mod.group && mod.group !== currentGroup) {
      currentGroup = mod.group;
      const groupHeader = document.createElement("div");
      groupHeader.className = "sidebar-group-title";
      groupHeader.innerText = currentGroup;
      moduleNavList.appendChild(groupHeader);
    }

    const isCompleted = state.completedModules.includes(mod.id);
    const isActive = mod.id === state.currentModuleId;
    
    const li = document.createElement("li");
    li.className = "module-nav-item";
    
    // Create link structure
    const a = document.createElement("a");
    a.className = `module-nav-link ${isActive ? 'active' : ''}`;
    a.dataset.id = mod.id;
    
    // Status Icon: Checkmark if completed, number otherwise
    const icon = document.createElement("span");
    icon.className = "module-status-icon";
    if (isCompleted) {
      icon.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else {
      icon.innerHTML = `<span style="font-size:0.8rem; font-weight:700; color:var(--text-secondary);">${idx}</span>`;
    }
    
    const textSpan = document.createElement("span");
    // Remove the prefix "Modul X: " from title in sidebar to make it cleaner
    const displayTitle = mod.title.replace(/^Modul \d+:\s*/i, '');
    textSpan.innerText = displayTitle;
    
    a.appendChild(icon);
    a.appendChild(textSpan);
    li.appendChild(a);
    
    // Click listener
    a.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Close mobile sidebar if open
      sidebar.classList.remove("show");
      
      // Load module
      const targetId = a.dataset.id;
      loadModule(targetId);
    });
    
    moduleNavList.appendChild(li);
  });
}

// Update progress bar calculations
function updateProgressBar() {
  const completedCount = state.completedModules.length;
  const percentage = Math.round((completedCount / state.totalModulesCount) * 100);
  
  progressBar.style.width = `${percentage}%`;
  progressText.innerText = `${percentage}% Selesai`;
}

// Load a specific module's content
function loadModule(moduleId) {
  state.currentModuleId = moduleId;
  
  // Find module data
  const moduleData = learningModules.find(m => m.id === moduleId);
  if (!moduleData) return;
  
  // Update sidebar active highlights
  document.querySelectorAll(".module-nav-link").forEach(link => {
    if (link.dataset.id === moduleId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Assemble HTML
  let html = `
    <h1 style="font-family: var(--font-heading); font-size: 2.2rem; font-weight: 800; margin-bottom: 8px; color: #fff;">${moduleData.title}</h1>
    <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 30px;">${moduleData.description}</p>
    
    <div class="module-theory-content">
      ${moduleData.content}
    </div>
  `;
  
  // Generate Quiz Section if module has quiz questions
  if (moduleData.quiz && moduleData.quiz.length > 0) {
    html += `
      <section class="quiz-section">
        <h3 class="quiz-section-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Uji Kemampuan Anda (Kuis Mandiri)
        </h3>
        <div id="quiz-container">
          <!-- Questions will be rendered here dynamically -->
        </div>
      </section>
    `;
  }
  
  // Inject into DOM
  contentBody.innerHTML = html;
  
  // Add animation class
  contentBody.classList.remove("fade-in-slide");
  void contentBody.offsetWidth; // Trigger reflow to restart animation
  contentBody.classList.add("fade-in-slide");
  
  // Render Quiz Questions
  if (moduleData.quiz && moduleData.quiz.length > 0) {
    renderQuiz(moduleData.quiz, moduleId);
  }
  
  // Render Mermaid UML diagrams asynchronously
  try {
    // Add wrapper around mermaid classes if not already present
    document.querySelectorAll(".mermaid").forEach((elem) => {
      // Wrap it in a parent container for beautiful aesthetics
      if (!elem.parentElement.classList.contains("mermaid-container")) {
        const container = document.createElement("div");
        container.className = "mermaid-container";
        
        // Add decorative title based on class/sequence
        const titleSpan = document.createElement("span");
        titleSpan.className = "mermaid-title";
        if (elem.innerText.includes("classDiagram")) titleSpan.innerText = "UML CLASS DIAGRAM";
        else if (elem.innerText.includes("sequenceDiagram")) titleSpan.innerText = "UML SEQUENCE DIAGRAM";
        else if (elem.innerText.includes("stateDiagram")) titleSpan.innerText = "UML STATE DIAGRAM";
        else titleSpan.innerText = "UML DIAGRAM";
        
        container.appendChild(titleSpan);
        elem.parentNode.insertBefore(container, elem);
        container.appendChild(elem);
      }
    });
    
    // Run mermaid render — only on visible nodes (exclude diagrams inside hidden solution panels)
    const visibleDiagrams = Array.from(document.querySelectorAll('.mermaid')).filter(el => !el.closest('.hidden'));
    if (visibleDiagrams.length > 0) {
      mermaid.run({ nodes: visibleDiagrams });
    }
  } catch (err) {
    console.error("Mermaid rendering failed: ", err);
  }

  // Scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  if (moduleId === "mod-15") {
    setTimeout(() => {
      if (window.showPdfPage) window.showPdfPage(1);
    }, 100);
  }
}

// Render Quiz questions and answers dynamically
function renderQuiz(questions, moduleId) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  
  // Track user answers for this session
  const userAnswers = new Array(questions.length).fill(null);
  
  questions.forEach((q, qIdx) => {
    const card = document.createElement("div");
    card.className = "quiz-card";
    
    const questionText = document.createElement("div");
    questionText.className = "quiz-question";
    questionText.innerText = `${qIdx + 1}. ${q.questionText}`;
    card.appendChild(questionText);
    
    const optionsList = document.createElement("ul");
    optionsList.className = "quiz-options";
    
    q.options.forEach((optText, optIdx) => {
      const li = document.createElement("li");
      li.className = "quiz-option";
      li.innerText = optText;
      
      li.addEventListener("click", () => {
        // Only allow clicking if not already answered
        if (userAnswers[qIdx] !== null) return;
        
        userAnswers[qIdx] = optIdx;
        const isCorrect = optIdx === q.correctAnswerIndex;
        
        // Highlight chosen option
        if (isCorrect) {
          li.classList.add("correct");
        } else {
          li.classList.add("incorrect");
          // Also show the correct option in green
          optionsList.children[q.correctAnswerIndex].classList.add("correct");
        }
        
        // Reveal explanation box
        feedbackDiv.style.display = "block";
        feedbackDiv.innerHTML = `
          <strong>${isCorrect ? '✅ Jawaban Benar!' : '❌ Jawaban Salah.'}</strong> Pembahasan:<br>${q.explanation}
        `;
        
        // Check if all questions in this module are completed
        checkQuizCompletion(userAnswers, questions.length, moduleId);
      });
      
      optionsList.appendChild(li);
    });
    
    card.appendChild(optionsList);
    
    const feedbackDiv = document.createElement("div");
    feedbackDiv.className = "quiz-feedback";
    card.appendChild(feedbackDiv);
    
    container.appendChild(card);
  });
}

// Check if all quiz questions of the module have been answered
function checkQuizCompletion(userAnswers, totalQuestions, moduleId) {
  // If there are no nulls, all questions are answered
  if (userAnswers.every(ans => ans !== null)) {
    // Add to completed modules if not already added
    if (!state.completedModules.includes(moduleId)) {
      state.completedModules.push(moduleId);
      saveProgressToStorage();
      renderSidebar();
      updateProgressBar();
    }
  }
}

// Global reveal function for Simulasi UAS accordion buttons
window.toggleSolution = function(solutionId) {
  const el = document.getElementById(solutionId);
  if (el) {
    el.classList.toggle("hidden");
    
    // If opening, trigger mermaid render only on diagrams not yet processed
      if (!el.classList.contains("hidden")) {
        const unprocessed = Array.from(el.querySelectorAll(".mermaid")).filter(
          n => !n.hasAttribute("data-processed")
        );
        if (unprocessed.length > 0) {
          try {
            mermaid.run({ nodes: unprocessed });
          } catch (err) {
            console.error("Nested Mermaid rendering error: ", err);
          }
        }
      }
  }
};

// Setup Navigation and Search Listeners
function setupEventListeners() {
  // Mobile sidebar toggle
  hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
  
  // Close mobile sidebar when clicking outside
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !hamburgerBtn.contains(e.target) && sidebar.classList.contains("show")) {
      sidebar.classList.remove("show");
    }
  });
  
  // Real-time search engine
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    
    if (query.length > 1) {
      performSearch(query);
    } else if (query.length === 0) {
      // Restore current module view if search cleared
      loadModule(state.currentModuleId);
    }
  });
}

// Perform text search across all modules
function performSearch(query) {
  let results = [];
  
  learningModules.forEach((mod) => {
    const titleMatch = mod.title.toLowerCase().includes(query);
    const descMatch = mod.description.toLowerCase().includes(query);
    
    // Simple text search in HTML content
    const cleanContent = mod.content.replace(/<[^>]*>/g, '').toLowerCase();
    const contentMatch = cleanContent.includes(query);
    
    if (titleMatch || descMatch || contentMatch) {
      // Find a snippet of text to display
      let snippet = "";
      if (contentMatch) {
        const idx = cleanContent.indexOf(query);
        const start = Math.max(0, idx - 60);
        const end = Math.min(cleanContent.length, idx + query.length + 60);
        snippet = "..." + cleanContent.substring(start, end).trim() + "...";
      } else {
        snippet = mod.description;
      }
      
      results.push({
        id: mod.id,
        title: mod.title,
        snippet: snippet
      });
    }
  });
  
  // Render search results
  contentBody.innerHTML = `
    <h2 class="search-results-title">Hasil Pencarian untuk: "${query}"</h2>
    <p style="margin-bottom: 25px;">Ditemukan ${results.length} materi yang cocok.</p>
    <div id="search-results-list"></div>
  `;
  
  const listContainer = document.getElementById("search-results-list");
  
  if (results.length === 0) {
    listContainer.innerHTML = `
      <div class="alert-box" style="margin-top: 10px;">
        Maaf, kami tidak menemukan materi atau diagram yang cocok dengan pencarian Anda. Coba istilah lain (seperti "UML", "Class", "CRC", "Aktivitas").
      </div>
    `;
    return;
  }
  
  results.forEach(res => {
    const item = document.createElement("div");
    item.className = "search-result-item";
    item.innerHTML = `
      <h4>${res.title}</h4>
      <p>${res.snippet}</p>
    `;
    
    item.addEventListener("click", () => {
      // Clear search input
      searchInput.value = "";
      // Load corresponding module
      loadModule(res.id);
    });
    
    listContainer.appendChild(item);
  });
}

// PDF Tab Viewer Helper
window.showPdfPage = function(pageNum) {
  // Hide all pages
  document.querySelectorAll(".pdf-page-block").forEach(page => {
    page.style.display = "none";
  });
  // Deactivate all tab buttons
  document.querySelectorAll(".pdf-tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  
  // Show target page
  const targetPage = document.getElementById(`pdf-page-${pageNum}`);
  if (targetPage) targetPage.style.display = "block";
  
  // Activate target button
  const targetBtn = document.getElementById(`pdf-btn-${pageNum}`);
  if (targetBtn) targetBtn.classList.add("active");
};
