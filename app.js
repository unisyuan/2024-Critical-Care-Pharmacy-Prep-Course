// Application State
let currentMode = 'practice'; // 'practice' or 'exam'
let currentChapter = '1';
let currentIndex = 0;
let practiceSource = null; // A mixed-chapter practice set, when active.
let userAnswers = Array(questions.length).fill(null); // Stores answers in Exam Mode
let practiceAnswers = Array(questions.length).fill(null); // Stores answers in Practice Mode
let examStartTime = null;
let examTimerInterval = null;
let examTimeSpentSeconds = 0;

// DOM Elements
const btnPractice = document.getElementById('btn-practice');
const btnExam = document.getElementById('btn-exam');
const btnHighlights = document.getElementById('btn-highlights');
const btnWrong = document.getElementById('btn-wrong');
const wrongBadgeCount = document.getElementById('wrong-badge-count');
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
const btnFavorites = document.getElementById('btn-favorites');
const favoriteBadgeCount = document.getElementById('favorite-badge-count');
const btnToggleFavorite = document.getElementById('btn-toggle-favorite');
const favoritesScreen = document.getElementById('favorites-screen');
const favoritesList = document.getElementById('favorites-list');
const favoritesEmptyState = document.getElementById('favorites-empty-state');
const btnStartFavoritesQuiz = document.getElementById('btn-start-favorites-quiz');
const favoriteStatus = document.getElementById('favorite-status');
const questionCategory = document.getElementById('question-category');

const progressText = document.getElementById('progress-text');
const progressPercentage = document.getElementById('progress-percentage');
const progressBarFill = document.getElementById('progress-bar-fill');

const questionBadge = document.getElementById('question-badge');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const explanationPanel = document.getElementById('explanation-panel');
const explanationTitle = document.querySelector('.explanation-title');
const explanationTextContent = document.getElementById('explanation-text');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnSubmitExam = document.getElementById('btn-submit-exam');

const quizScreen = document.getElementById('quiz-screen');
const scoreScreen = document.getElementById('score-screen');
const reviewScreen = document.getElementById('review-screen');
const highlightsScreen = document.getElementById('highlights-screen');
const wrongScreen = document.getElementById('wrong-screen');

const wrongList = document.getElementById('wrong-list');
const wrongEmptyState = document.getElementById('wrong-empty-state');
const btnStartWrongQuiz = document.getElementById('btn-start-wrong-quiz');
const btnClearWrong = document.getElementById('btn-clear-wrong');

const resultScore = document.getElementById('result-score');
const scoreCircleFill = document.getElementById('score-circle-fill');
const statAccuracy = document.getElementById('stat-accuracy');
const statTime = document.getElementById('stat-time');
const statGrade = document.getElementById('stat-grade');

const btnRestart = document.getElementById('btn-restart');
const btnReview = document.getElementById('btn-review');
const btnExitReview = document.getElementById('btn-exit-review');
const reviewList = document.getElementById('review-list');

function escapeQuizText(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char])).replace(/\n/g, '<br>');
}

// LocalStorage Wrong Questions Storage
const WRONG_STORAGE_KEY = 'quiz_bank_wrong_questions_pdf_20261025';

// Preserve saved mistakes when the PDF removes duplicate toxicology questions.
// The legacy key is retained as a backup; migration runs only once.
function migratePdfWrongQuestions() {
  try {
    if (localStorage.getItem(WRONG_STORAGE_KEY) !== null) return;
    const legacy = JSON.parse(localStorage.getItem('quiz_bank_wrong_questions') || '[]');
    if (!Array.isArray(legacy)) return;
    const toxicologyIds = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8,
      9:17, 10:18, 11:19, 12:9, 13:10, 14:11, 15:12, 16:13, 17:14,
      18:15, 19:16, 20:17, 21:18, 22:19};
    const seen = new Set();
    const migrated = [];
    legacy.forEach(item => {
      if (!item || typeof item !== 'object') return;
      const chapter = String(item.chapter);
      const id = chapter === '20' ? toxicologyIds[item.id] : Number(item.id);
      if (!(allChapters[chapter] || []).some(q => q.id === id)) return;
      const key = `${chapter}:${id}`;
      if (!seen.has(key)) {
        seen.add(key);
        migrated.push({...item, chapter, id});
      }
    });
    localStorage.setItem(WRONG_STORAGE_KEY, JSON.stringify(migrated));
  } catch (e) {
    console.warn('Unable to migrate saved questions:', e);
  }
}

function getWrongQuestions() {
  try {
    const raw = localStorage.getItem(WRONG_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn('localStorage access failed for wrong questions:', e);
    return [];
  }
}

function saveWrongQuestions(list) {
  try {
    localStorage.setItem(WRONG_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('localStorage save failed for wrong questions:', e);
  }
  updateWrongBadgeCount();
}

function addWrongQuestion(chapterId, questionId) {
  const list = getWrongQuestions();
  const exists = list.some(item => String(item.chapter) === String(chapterId) && String(item.id) === String(questionId));
  if (!exists) {
    list.push({ chapter: String(chapterId), id: questionId, addedAt: Date.now() });
    saveWrongQuestions(list);
  }
}

function removeWrongQuestion(chapterId, questionId) {
  let list = getWrongQuestions();
  list = list.filter(item => !(String(item.chapter) === String(chapterId) && String(item.id) === String(questionId)));
  saveWrongQuestions(list);
}

function clearWrongQuestions() {
  saveWrongQuestions([]);
}

function updateWrongBadgeCount() {
  const list = getWrongQuestions();
  if (wrongBadgeCount) {
    if (list.length > 0) {
      wrongBadgeCount.textContent = list.length;
      wrongBadgeCount.classList.remove('hidden');
    } else {
      wrongBadgeCount.classList.add('hidden');
    }
  }
}

// Favorites are independent of answers and use chapter + question ID as identity.
const FAVORITES_STORAGE_KEY = 'quiz_bank_favorites_v1';
let favoriteItems = readStoredFavorites();

function normalizeFavorites(items) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter(item => {
    if (!item || typeof item !== 'object') return false;
    const key = `${String(item.chapter)}:${Number(item.id)}`;
    if (seen.has(key) || !(allChapters[String(item.chapter)] || []).some(q => q.id === Number(item.id))) return false;
    seen.add(key);
    return true;
  }).map(item => ({chapter: String(item.chapter), id: Number(item.id)}));
}

function readStoredFavorites() {
  try {
    return normalizeFavorites(JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]'));
  } catch (e) {
    return [];
  }
}

function isFavorite(chapter, id) {
  return favoriteItems.some(item => item.chapter === String(chapter) && item.id === Number(id));
}

function updateFavoriteButton(button, chapter, id) {
  const saved = isFavorite(chapter, id);
  button.textContent = saved ? '★ 已收藏' : '☆ 收藏';
  button.setAttribute('aria-pressed', String(saved));
  button.setAttribute('aria-label', `${saved ? '取消收藏' : '收藏'}第 ${chapter} 章第 ${id} 題`);
  button.classList.toggle('is-favorite', saved);
}

function refreshFavoriteControls() {
  favoriteBadgeCount.textContent = String(favoriteItems.length);
  favoriteBadgeCount.classList.toggle('hidden', favoriteItems.length === 0);
  btnStartFavoritesQuiz.disabled = favoriteItems.length === 0;
  const q = questions[currentIndex];
  btnToggleFavorite.disabled = !q;
  if (q) updateFavoriteButton(btnToggleFavorite, q.chapter || currentChapter, q.id);
  document.querySelectorAll('[data-favorite-chapter]').forEach(button => {
    updateFavoriteButton(button, button.getAttribute('data-favorite-chapter'), button.getAttribute('data-favorite-id'));
  });
}

function toggleFavorite(chapter, id) {
  chapter = String(chapter);
  id = Number(id);
  if (!(allChapters[chapter] || []).some(q => q.id === id)) return;
  const saved = isFavorite(chapter, id);
  favoriteItems = saved
    ? favoriteItems.filter(item => !(item.chapter === chapter && item.id === id))
    : [...favoriteItems, {chapter, id}];
  let message = saved ? '已取消收藏。' : '已加入收藏。';
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteItems));
  } catch (e) {
    message += ' 瀏覽器目前無法儲存，這次變更僅保留於本次使用期間。';
  }
  favoriteStatus.textContent = message;
  refreshFavoriteControls();
  if (currentMode === 'favorites') {
    renderFavoritesScreen();
    // Removing a focused card moves focus to the next available control.
    const nextButton = favoritesList.querySelector('.favorite-toggle');
    (nextButton || btnFavorites).focus();
  }
}

function createFavoriteButton(chapter, id) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'favorite-toggle';
  button.setAttribute('data-favorite-chapter', chapter);
  button.setAttribute('data-favorite-id', id);
  updateFavoriteButton(button, chapter, id);
  button.addEventListener('click', () => toggleFavorite(chapter, id));
  return button;
}

function renderFavoritesScreen() {
  favoritesList.innerHTML = '';
  favoritesEmptyState.classList.toggle('hidden', favoriteItems.length !== 0);
  btnStartFavoritesQuiz.disabled = favoriteItems.length === 0;
  favoriteItems.forEach(item => {
    const q = allChapters[item.chapter].find(q => q.id === item.id);
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-meta"><span class="chapter-tag">第 ${item.chapter} 章</span><span class="question-badge">Q${q.id}</span></div>
      <p class="review-question-text">${escapeQuizText(q.question)}</p>
      <details class="favorite-details">
        <summary>查看選項與解析</summary>
        <div class="review-choices">${q.options.map(opt => `<div class="review-choice">${escapeQuizText(opt)}</div>`).join('')}</div>
        <div class="review-explanation"><strong>正確答案：${q.answer}</strong><br>${escapeQuizText(q.explanation)}</div>
      </details>`;
    card.querySelector('.review-meta').appendChild(createFavoriteButton(item.chapter, item.id));
    favoritesList.appendChild(card);
  });
}

function showOnlyScreen(screen) {
  [quizScreen, scoreScreen, reviewScreen, highlightsScreen, wrongScreen, favoritesScreen].forEach(item => {
    item.classList.toggle('active', item === screen);
  });
}

function startSavedQuestionsPractice(items, source) {
  const selected = items.flatMap(item => {
    const q = (allChapters[item.chapter] || []).find(q => String(q.id) === String(item.id));
    return q ? [{...q, chapter: String(item.chapter)}] : [];
  });
  if (!selected.length) return;
  stopExamTimer();
  currentMode = 'practice';
  practiceSource = source;
  questions = selected;
  currentIndex = 0;
  practiceAnswers = Array(questions.length).fill(null);
  userAnswers = Array(questions.length).fill(null);
  [btnPractice, btnExam, btnWrong, btnFavorites, btnHighlights].forEach(button => button.classList.toggle('active', button === btnPractice));
  document.querySelector('.progress-container').classList.remove('hidden');
  showOnlyScreen(quizScreen);
  renderCurrentState();
}

// Initialize App
function init() {
  setupEventListeners();
  loadTheme();
  migratePdfWrongQuestions();
  updateWrongBadgeCount();
  refreshFavoriteControls();
  
  // Set initial dropdown value
  document.getElementById('chapter-select').value = currentChapter;
  
  renderCurrentState();
}

// Event Listeners Setup
function setupEventListeners() {
  btnPractice.addEventListener('click', () => switchMode('practice'));
  btnExam.addEventListener('click', () => switchMode('exam'));
  btnHighlights.addEventListener('click', () => switchMode('highlights'));
  btnWrong.addEventListener('click', () => switchMode('wrong'));
  btnFavorites.addEventListener('click', () => switchMode('favorites'));
  btnToggleFavorite.addEventListener('click', () => {
    const q = questions[currentIndex];
    if (q) toggleFavorite(q.chapter || currentChapter, q.id);
  });
  btnStartFavoritesQuiz.addEventListener('click', () => startSavedQuestionsPractice(favoriteItems, 'favorites'));
  window.addEventListener('storage', event => {
    if (event.key !== FAVORITES_STORAGE_KEY && event.key !== null) return;
    favoriteItems = readStoredFavorites();
    refreshFavoriteControls();
    if (currentMode === 'favorites') renderFavoritesScreen();
  });
  themeToggle.addEventListener('click', toggleTheme);
  
  const chapterSelect = document.getElementById('chapter-select');
  chapterSelect.addEventListener('change', handleChapterChange);
  
  btnPrev.addEventListener('click', prevQuestion);
  btnNext.addEventListener('click', nextQuestion);
  btnSubmitExam.addEventListener('click', handleExamSubmission);
  
  btnRestart.addEventListener('click', restartExam);
  btnReview.addEventListener('click', showExamReview);
  btnExitReview.addEventListener('click', hideExamReview);
  
  btnStartWrongQuiz.addEventListener('click', startWrongQuiz);
  btnClearWrong.addEventListener('click', handleClearWrong);
}

// Theme Handlers
function loadTheme() {
  try {
    const savedTheme = localStorage.getItem('quiz-theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);
  } catch (e) {
    console.warn('localStorage access failed:', e);
    htmlEl.setAttribute('data-theme', 'light');
  }
}

function toggleTheme() {
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', newTheme);
  try {
    localStorage.setItem('quiz-theme', newTheme);
  } catch (e) {
    console.warn('localStorage access failed:', e);
  }
}

// Mode Switching Logic
function switchMode(mode) {
  if (currentMode === mode && !(mode === 'practice' && practiceSource)) return;
  if (mode === 'exam' && !confirm('將開始測驗模式！這將清除之前的作答，並開始計時。是否開始？')) return;
  stopExamTimer();
  [btnPractice, btnExam, btnWrong, btnFavorites, btnHighlights].forEach(button => button.classList.remove('active'));
  const progressContainer = document.querySelector('.progress-container');
  progressContainer.classList.toggle('hidden', !['practice', 'exam'].includes(mode));
  currentMode = mode;
  favoriteStatus.textContent = '';
  if (mode === 'practice' || mode === 'exam') {
    practiceSource = null;
    questions = allChapters[currentChapter] || [];
    currentIndex = 0;
    practiceAnswers = Array(questions.length).fill(null);
    userAnswers = Array(questions.length).fill(null);
    showOnlyScreen(quizScreen);
    if (mode === 'exam') {
      btnExam.classList.add('active');
      startExam();
    } else {
      btnPractice.classList.add('active');
      renderCurrentState();
    }
  } else if (mode === 'highlights') {
    btnHighlights.classList.add('active');
    highlightsScreen.innerHTML = allHighlights[currentChapter] || '<div class="highlights-card"><h2 class="highlights-title">此章節暫無重點整理</h2></div>';
    showOnlyScreen(highlightsScreen);
  } else if (mode === 'wrong') {
    btnWrong.classList.add('active');
    showOnlyScreen(wrongScreen);
    renderWrongScreen();
  } else if (mode === 'favorites') {
    btnFavorites.classList.add('active');
    showOnlyScreen(favoritesScreen);
    renderFavoritesScreen();
  }
}

// Handle Chapter Dropdown Change
function handleChapterChange() {
  currentChapter = this.value;
  practiceSource = null;
  questions = allChapters[currentChapter] || [];
  
  // Reset state variables
  currentIndex = 0;
  userAnswers = Array(questions.length).fill(null);
  practiceAnswers = Array(questions.length).fill(null);
  
  if (currentMode === 'exam') {
    if (questions.length === 0) {
      alert("此章節尚未加入測驗題目，自動切換至重點整理模式。");
      switchMode('highlights');
      return;
    }
    startExam();
  } else if (currentMode === 'practice') {
    renderCurrentState();
  } else if (currentMode === 'highlights') {
    highlightsScreen.innerHTML = allHighlights[currentChapter] || '<div class="highlights-card"><h2 class="highlights-title">此章節暫無重點整理</h2></div>';
  }
}

// Exam Specific Timer & Logic
function startExam() {
  currentIndex = 0;
  userAnswers = Array(questions.length).fill(null);
  examTimeSpentSeconds = 0;
  examStartTime = Date.now();
  
  // Reset screen states
  showOnlyScreen(quizScreen);
  quizScreen.classList.add('active');
  scoreScreen.classList.remove('active');
  reviewScreen.classList.remove('active');
  
  startExamTimer();
  renderCurrentState();
}

function startExamTimer() {
  stopExamTimer(); // clear previous
  examTimerInterval = setInterval(() => {
    examTimeSpentSeconds++;
  }, 1000);
}

function stopExamTimer() {
  if (examTimerInterval) {
    clearInterval(examTimerInterval);
    examTimerInterval = null;
  }
}

function restartExam() {
  startExam();
}

// Format seconds into MM:SS
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Render logic
function renderCurrentState() {
  renderQuestion();
  updateProgress();
  updateNavigation();
}

function renderQuestion() {
  refreshFavoriteControls();
  if (questions.length === 0) {
    questionBadge.textContent = "N/A";
    questionText.textContent = "此章節尚未加入測驗題目。請切換至其他章節，或點選右上方「重點整理」閱讀本章內容。";
    optionsContainer.innerHTML = '';
    hideExplanation();
    return;
  }

  const q = questions[currentIndex];
  
  // Render badge & text
  questionBadge.textContent = `Q${q.id}`;
  questionCategory.textContent = `第 ${q.chapter || currentChapter} 章`;
  questionText.textContent = q.question;
  
  // Clear previous options
  optionsContainer.innerHTML = '';
  
  // Populate options
  q.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    
    const choiceLetter = opt.charAt(0); // A, B, C, or D
    
    // Style option based on current mode & state
    if (currentMode === 'practice') {
      const selectedPractice = practiceAnswers[currentIndex];
      
      if (selectedPractice !== null) {
        // Question has been answered in practice mode
        btn.disabled = true;
        
        if (choiceLetter === q.answer) {
          btn.classList.add('correct');
        } else if (choiceLetter === selectedPractice) {
          btn.classList.add('incorrect');
        } else {
          btn.classList.add('muted');
        }
      }
      
      // Setup click listener for practice
      btn.addEventListener('click', () => handlePracticeSelection(choiceLetter));
      
    } else if (currentMode === 'exam') {
      const selectedExam = userAnswers[currentIndex];
      
      if (selectedExam === choiceLetter) {
        btn.classList.add('selected-exam');
      }
      
      // Setup click listener for exam
      btn.addEventListener('click', () => handleExamSelection(choiceLetter));
    }
    
    optionsContainer.appendChild(btn);
  });
  
  // Handle Explanation Panel
  if (currentMode === 'practice') {
    const selectedPractice = practiceAnswers[currentIndex];
    if (selectedPractice !== null) {
      showExplanation(q.answer, selectedPractice === q.answer, q.explanation);
    } else {
      hideExplanation();
    }
  } else {
    // Exam mode hides explanation during test
    hideExplanation();
  }
}

// Selection handlers
function handlePracticeSelection(selectedLetter) {
  practiceAnswers[currentIndex] = selectedLetter;
  const q = questions[currentIndex];
  const qChapter = q.chapter || currentChapter;
  
  if (selectedLetter !== q.answer) {
    addWrongQuestion(qChapter, q.id);
  } else {
    removeWrongQuestion(qChapter, q.id);
  }
  
  renderQuestion();
  updateProgress(); // Progress changes as questions are completed
}

function handleExamSelection(selectedLetter) {
  userAnswers[currentIndex] = selectedLetter;
  
  // Re-render to show selected choice
  renderQuestion();
  updateProgress();
  
  // Auto advance after short delay in exam mode to make it feel smooth
  setTimeout(() => {
    if (currentIndex < questions.length - 1) {
      nextQuestion();
    }
  }, 300);
}

// Explanation Panel Display
function showExplanation(correctAnswer, isCorrect, text) {
  explanationTitle.innerHTML = isCorrect 
    ? `<span style="color: var(--correct-text)">✓ 答對了！ 正確答案為 ${correctAnswer}</span>`
    : `<span style="color: var(--incorrect-text)">✗ 答錯了！ 正確答案為 ${correctAnswer}</span>`;
    
  explanationTextContent.textContent = text;
  explanationPanel.classList.add('visible');
}

function hideExplanation() {
  explanationPanel.classList.remove('visible');
}

// Progress Bar & Meta Updates
function updateProgress() {
  if (currentMode === 'highlights') return;
  if (questions.length === 0) {
    progressText.textContent = `已完成 0 / 0 題`;
    progressPercentage.textContent = `0%`;
    progressBarFill.style.width = `0%`;
    return;
  }
  let progressRatio = 0;
  
  if (currentMode === 'practice') {
    // Based on how many questions are answered in total
    const answeredCount = practiceAnswers.filter(ans => ans !== null).length;
    progressRatio = answeredCount / questions.length;
    
    progressText.textContent = `已完成 ${answeredCount} / ${questions.length} 題`;
  } else {
    // In exam mode, progress shows currently viewed question index or how many answered
    const answeredCount = userAnswers.filter(ans => ans !== null).length;
    progressRatio = answeredCount / questions.length;
    
    progressText.textContent = `答題進度 ${answeredCount} / ${questions.length} 題 (當前第 ${currentIndex + 1} 題)`;
  }
  
  const percentage = Math.round(progressRatio * 100);
  progressPercentage.textContent = `${percentage}%`;
  progressBarFill.style.width = `${percentage}%`;
}

// Navigation Controls Update
function updateNavigation() {
  if (currentMode === 'highlights') return;
  if (questions.length === 0) {
    btnPrev.disabled = true;
    btnNext.disabled = true;
    btnNext.classList.remove('hidden');
    btnSubmitExam.classList.add('hidden');
    return;
  }
  btnPrev.disabled = currentIndex === 0;
  
  if (currentMode === 'practice') {
    btnNext.classList.remove('hidden');
    btnSubmitExam.classList.add('hidden');
    btnNext.disabled = currentIndex === questions.length - 1;
  } else {
    // Exam mode navigation logic
    if (currentIndex === questions.length - 1) {
      btnNext.classList.add('hidden');
      btnSubmitExam.classList.remove('hidden');
    } else {
      btnNext.classList.remove('hidden');
      btnSubmitExam.classList.add('hidden');
      btnNext.disabled = false;
    }
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderCurrentState();
  }
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderCurrentState();
  }
}

// Exam Submission & Stats calculations
function handleExamSubmission() {
  const unansweredCount = userAnswers.filter(ans => ans === null).length;
  
  if (unansweredCount > 0) {
    const confirmSubmit = confirm(`您還有 ${unansweredCount} 題尚未回答。確定要提交考卷嗎？`);
    if (!confirmSubmit) return;
  } else {
    const confirmSubmit = confirm('確定要提交考卷並看結果嗎？');
    if (!confirmSubmit) return;
  }
  
  stopExamTimer();
  calculateAndShowResults();
}

function calculateAndShowResults() {
  let correctCount = 0;
  
  questions.forEach((q, idx) => {
    const qChapter = q.chapter || currentChapter;
    if (userAnswers[idx] === q.answer) {
      correctCount++;
    } else {
      addWrongQuestion(qChapter, q.id);
    }
  });
  
  const accuracy = Math.round((correctCount / questions.length) * 100);
  
  // Grade evaluation
  let grade = '待加強';
  if (accuracy >= 85) {
    grade = '極佳 (Mastery)';
  } else if (accuracy >= 65) {
    grade = '良好 (Competent)';
  } else {
    grade = '待加強 (Needs Practice)';
  }
  
  // Render results to DOM
  resultScore.textContent = `${correctCount} / ${questions.length}`;
  statAccuracy.textContent = `${accuracy}%`;
  statTime.textContent = formatTime(examTimeSpentSeconds);
  statGrade.textContent = grade;
  
  // Radial circle stroke offset animation
  // Circumference is 283. Offset = 283 - (283 * ratio)
  const offsetValue = 283 - (283 * (correctCount / questions.length));
  
  // Trigger animation after screen transitions
  quizScreen.classList.remove('active');
  scoreScreen.classList.add('active');
  
  setTimeout(() => {
    scoreCircleFill.style.strokeDashoffset = offsetValue;
  }, 100);
}

// Review Mode Implementation
function showExamReview() {
  reviewList.innerHTML = '';
  
  questions.forEach((q, idx) => {
    const userSelected = userAnswers[idx];
    const isCorrect = userSelected === q.answer;
    
    const card = document.createElement('div');
    card.className = 'review-card';
    
    // Build meta section with badge
    const badgeClass = isCorrect ? 'correct' : 'incorrect';
    const badgeText = isCorrect ? '✓ 答對' : '✗ 答錯';
    
    card.innerHTML = `
      <div class="review-meta">
        <span class="question-badge">Q${q.id}</span>
        <span class="review-status-badge ${badgeClass}">${badgeText}</span>
      </div>
      
      <p class="review-question-text">${escapeQuizText(q.question)}</p>
      
      <div class="review-choices">
        ${q.options.map(opt => {
          const choiceLetter = opt.charAt(0);
          let extraClass = '';
          
          if (choiceLetter === q.answer) {
            extraClass = 'correct-answer';
          } else if (choiceLetter === userSelected && !isCorrect) {
            extraClass = 'user-selected-incorrect';
          }
          
          return `<div class="review-choice ${extraClass}">${escapeQuizText(opt)}</div>`;
        }).join('')}
      </div>
      
      <div class="review-explanation">
        <strong>答案解析：</strong><br>
        ${escapeQuizText(q.explanation)}
      </div>
    `;
    
    card.querySelector('.review-meta').appendChild(createFavoriteButton(q.chapter || currentChapter, q.id));
    reviewList.appendChild(card);
  });
  
  scoreScreen.classList.remove('active');
  reviewScreen.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideExamReview() {
  reviewScreen.classList.remove('active');
  scoreScreen.classList.add('active');
}

// Wrong Screen Render & Action Functions
function renderWrongScreen() {
  const list = getWrongQuestions();
  wrongList.innerHTML = '';
  
  if (list.length === 0) {
    wrongEmptyState.classList.remove('hidden');
    return;
  } else {
    wrongEmptyState.classList.add('hidden');
  }
  
  list.forEach(item => {
    const chapterQuestions = allChapters[item.chapter] || [];
    const q = chapterQuestions.find(q => String(q.id) === String(item.id));
    if (!q) return;
    
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="wrong-item-header">
        <div>
          <span class="chapter-tag">第 ${item.chapter} 章</span>
          <span class="question-badge" style="margin-left: 6px;">Q${q.id}</span>
        </div>
        <button class="btn-remove-wrong" data-chapter="${item.chapter}" data-id="${q.id}">
          ✕ 移出錯題本
        </button>
      </div>
      <p class="review-question-text">${escapeQuizText(q.question)}</p>
      <div class="review-choices">
        ${q.options.map(opt => {
          const choiceLetter = opt.charAt(0);
          const isCorrectChoice = choiceLetter === q.answer;
          return `<div class="review-choice ${isCorrectChoice ? 'correct-answer' : ''}">${escapeQuizText(opt)}</div>`;
        }).join('')}
      </div>
      <div class="review-explanation">
        <strong>答案解析（正確答案為 ${q.answer}）：</strong><br>
        ${escapeQuizText(q.explanation)}
      </div>
    `;
    
    const removeBtn = card.querySelector('.btn-remove-wrong');
    removeBtn.addEventListener('click', (e) => {
      const ch = e.currentTarget.getAttribute('data-chapter');
      const qId = e.currentTarget.getAttribute('data-id');
      removeWrongQuestion(ch, qId);
      renderWrongScreen();
    });
    
    card.querySelector('.wrong-item-header').appendChild(createFavoriteButton(item.chapter, q.id));
    wrongList.appendChild(card);
  });
}

function startWrongQuiz() {
  const items = getWrongQuestions();
  if (!items.length) {
    alert('目前錯題本中沒有題目喔！');
    return;
  }
  startSavedQuestionsPractice(items, 'wrong');
}

function handleClearWrong() {
  const list = getWrongQuestions();
  if (list.length === 0) {
    alert('錯題本已經是空的了！');
    return;
  }
  
  const confirmClear = confirm(`確定要清空全部的 ${list.length} 道錯題嗎？此動作無法復原。`);
  if (confirmClear) {
    clearWrongQuestions();
    renderWrongScreen();
  }
}

// Kick off
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
