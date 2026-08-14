// Application State
let currentMode = 'practice'; // 'practice' or 'exam'
let currentChapter = '1';
let currentIndex = 0;
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

// LocalStorage Wrong Questions Storage
const WRONG_STORAGE_KEY = 'quiz_bank_wrong_questions';

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

// Initialize App
function init() {
  setupEventListeners();
  loadTheme();
  updateWrongBadgeCount();
  
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
  if (currentMode === mode) return;

  // Remove active class from all tabs
  btnPractice.classList.remove('active');
  btnExam.classList.remove('active');
  btnHighlights.classList.remove('active');
  btnWrong.classList.remove('active');

  // Progress bar container selector
  const progressContainer = document.querySelector('.progress-container');

  if (mode === 'exam') {
    const confirmStart = confirm('將開始測驗模式！這將清除之前的作答，並開始計時。是否開始？');
    if (!confirmStart) return;
    
    btnExam.classList.add('active');
    progressContainer.classList.remove('hidden');
    currentMode = 'exam';
    startExam();
  } else if (mode === 'practice') {
    stopExamTimer();
    btnPractice.classList.add('active');
    progressContainer.classList.remove('hidden');
    
    currentMode = 'practice';
    questions = allChapters[currentChapter] || [];
    currentIndex = 0;
    
    // Switch active screen back to quiz screen
    quizScreen.classList.add('active');
    scoreScreen.classList.remove('active');
    reviewScreen.classList.remove('active');
    highlightsScreen.classList.remove('active');
    wrongScreen.classList.remove('active');
    
    renderCurrentState();
  } else if (mode === 'highlights') {
    stopExamTimer();
    btnHighlights.classList.add('active');
    progressContainer.classList.add('hidden');
    
    currentMode = 'highlights';
    
    // Render highlights dynamically
    highlightsScreen.innerHTML = allHighlights[currentChapter] || '<div class="highlights-card"><h2 class="highlights-title">此章節暫無重點整理</h2></div>';
    
    // Show highlights screen, hide others
    quizScreen.classList.remove('active');
    scoreScreen.classList.remove('active');
    reviewScreen.classList.remove('active');
    wrongScreen.classList.remove('active');
    highlightsScreen.classList.add('active');
  } else if (mode === 'wrong') {
    stopExamTimer();
    btnWrong.classList.add('active');
    progressContainer.classList.add('hidden');
    
    currentMode = 'wrong';
    
    quizScreen.classList.remove('active');
    scoreScreen.classList.remove('active');
    reviewScreen.classList.remove('active');
    highlightsScreen.classList.remove('active');
    wrongScreen.classList.add('active');
    
    renderWrongScreen();
  }
}

// Handle Chapter Dropdown Change
function handleChapterChange() {
  currentChapter = this.value;
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
      
      <p class="review-question-text">${q.question}</p>
      
      <div class="review-choices">
        ${q.options.map(opt => {
          const choiceLetter = opt.charAt(0);
          let extraClass = '';
          
          if (choiceLetter === q.answer) {
            extraClass = 'correct-answer';
          } else if (choiceLetter === userSelected && !isCorrect) {
            extraClass = 'user-selected-incorrect';
          }
          
          return `<div class="review-choice ${extraClass}">${opt}</div>`;
        }).join('')}
      </div>
      
      <div class="review-explanation">
        <strong>答案解析：</strong><br>
        ${q.explanation}
      </div>
    `;
    
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
      <p class="review-question-text">${q.question}</p>
      <div class="review-choices">
        ${q.options.map(opt => {
          const choiceLetter = opt.charAt(0);
          const isCorrectChoice = choiceLetter === q.answer;
          return `<div class="review-choice ${isCorrectChoice ? 'correct-answer' : ''}">${opt}</div>`;
        }).join('')}
      </div>
      <div class="review-explanation">
        <strong>答案解析（正確答案為 ${q.answer}）：</strong><br>
        ${q.explanation}
      </div>
    `;
    
    const removeBtn = card.querySelector('.btn-remove-wrong');
    removeBtn.addEventListener('click', (e) => {
      const ch = e.currentTarget.getAttribute('data-chapter');
      const qId = e.currentTarget.getAttribute('data-id');
      removeWrongQuestion(ch, qId);
      renderWrongScreen();
    });
    
    wrongList.appendChild(card);
  });
}

function startWrongQuiz() {
  const list = getWrongQuestions();
  if (list.length === 0) {
    alert('目前錯題本中沒有題目喔！');
    return;
  }
  
  const wrongQuestions = [];
  list.forEach(item => {
    const chapterQuestions = allChapters[item.chapter] || [];
    const q = chapterQuestions.find(q => String(q.id) === String(item.id));
    if (q) {
      wrongQuestions.push({ ...q, chapter: item.chapter });
    }
  });
  
  if (wrongQuestions.length === 0) {
    alert('找不到錯題對應的題目資料。');
    return;
  }
  
  btnWrong.classList.remove('active');
  btnPractice.classList.add('active');
  document.querySelector('.progress-container').classList.remove('hidden');
  
  currentMode = 'practice';
  questions = wrongQuestions;
  currentIndex = 0;
  practiceAnswers = Array(questions.length).fill(null);
  
  wrongScreen.classList.remove('active');
  quizScreen.classList.add('active');
  scoreScreen.classList.remove('active');
  reviewScreen.classList.remove('active');
  highlightsScreen.classList.remove('active');
  
  renderCurrentState();
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
