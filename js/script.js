const QUESTIONS = [...QUESTION_A, ...QUESTIONS_B];

let activeSection = "ALL";
let showAllAnswer = false;
let userAnswers = {};

function initApp() {
  renderQuestions();
}
function setSection(sec) {
  activeSection = sec;
  document.querySelectorAll(".navBtn");
  const activeBtn = document.getElementById(`tab${sec}`);
  applyFilters();
}
function applyFilters() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const selectedTopic = document.getElementById("topicSelect").value;

  const filtered = QUESTIONS.filter((q) => {
    // Section Filter
    if (
      activeSection !== "ALL" &&
      activeSection !== "KUNCI" &&
      q.section !== activeSection
    ) {
      return false;
    }
    // Topic Filter
    if (selectedTopic !== "all" && q.category !== selectedTopic) {
      return false;
    }
    // Search Filter
    if (searchTerm) {
      const matchId = q.id.toString().includes(searchTerm);
      const matchQ = q.question.toLowerCase().includes(searchTerm);
      const matchCat = q.category.toLowerCase().includes(searchTerm);
      return matchId || matchQ || matchCat;
    }
    return true;
  });
  renderQuestions(filtered);
}
function toggleAllAnswers() {
  showAllAnswers = !showAllAnswers;
  const btn = document.getElementById("toggleAllBtn");
  btn.innerHTML = showAllAnswers ? "Sembunyikan Kunci" : "Buka Kunci";

  QUESTIONS.forEach((q) => {
    const ansElem = document.getElementById(`explanation-${q.id}`);
    if (ansElem) {
      if (showAllAnswers) {
        ansElem.classList.remove("hidden");
      } else {
        ansElem.classList.add("hidden");
      }
    }
  });
}
function toggleSingleAnswer(id) {
  const ansElem = document.getElementById(`explanation-${id}`);
  if (ansElem) {
    ansElem.classList.toggle("hidden");
  }
}
function checkUserAnswer(id) {
  const q = QUESTIONS.find((item) => item.id === id);
  if (!q) return;

  const feedbackElem = document.getElementById(`feedback-${id}`);
  const selectedOption = document.querySelector(
    `input[name="q-${id}"]:checked`,
  );
  if (!selectedOption) {
    feedbackElem.innerHTML = `<span>Pilih salah satu opsi jawaban terlebih dahulu.</span>`;
    return;
  }
  if (selectedOption.value === q.answer) {
    feedbackElem.innerHTML = `<span>✓ Jawaban Benar! (${q.answerKey})</span>`;
  } else {
    feedbackElem.innerHTML = `<span>✗ Jawaban Kurang Tepat. Kunci: ${q.answerKey}</span>`;
  }
  // Reveal explanation after check
  const ansElem = document.getElementById(`explanation-${id}`);
  if (ansElem) {
    ansElem.classList.remove("hidden");
  }
}

function renderQuestions(items = QUESTIONS) {
  const container = document.getElementById("questionsContainer");
  const emptyState = document.getElementById("emptyState");
  if (items.length === 0) {
    container.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }
  let html = "";
  items.forEach((q) => {
    const isKunciMode = activeSection === "KUNCI";

    html += `
          <article class="question-card">

        <!-- HEADER CARD -->
        <div class="question-header">
          <div class="question-meta">
            <span class="question-number">
              Soal #${q.id}
            </span>

            <span class="question-category">
              ${q.category}
            </span>

            <span class="question-section">
              Bagian ${q.section}
            </span>
          </div>
        </div>

        <!-- QUESTION -->
        <div class="question-body">
          <h3 class="question-text">
            ${q.question}
          </h3>
        </div>

        <!-- CODE -->
        ${
          q.code
            ? `
              <div class="question-code">
                <pre><code>${escapeHtml(q.code)}</code></pre>
              </div>
            `
            : ""
        }

        <!-- OPTIONS -->
        ${
          !isKunciMode
            ? `
              <div class="question-options">

                ${q.options
                  .map((opt, idx) => {
                    const optVal = String.fromCharCode(97 + idx);

                    return `
                      <label class="option-item">
                        <input
                          type="radio"
                          name="q-${q.id}"
                          value="${optVal}"
                        >

                        <span class="option-content">
                          ${opt}
                        </span>
                      </label>
                    `;
                  })
                  .join("")}

              </div>
            `
            : ""
        }

        <!-- FEEDBACK -->
        <div
          id="feedback-${q.id}"
          class="question-feedback"
        ></div>

        <!-- ACTION -->
        <div class="question-actions">

          ${
            !isKunciMode
              ? `
                <button
                  type="button"
                  class="btn-check"
                  onclick="checkUserAnswer(${q.id})"
                >
                  ✓ Cek Jawaban
                </button>
              `
              : ""
          }

          <button
            type="button"
            class="btn-explanation"
            onclick="toggleSingleAnswer(${q.id})"
          >
            💡 Kunci & Pembahasan
          </button>

        </div>

        <!-- EXPLANATION -->
        <div
          id="explanation-${q.id}"
          class="question-explanation hidden"
        >

          <div class="answer-key">
            <span class="answer-label">
              Kunci Jawaban
            </span>

            <span class="answer-value">
              ${q.answerKey}
            </span>
          </div>

          <div class="explanation-content">
            <strong>Langkah Pembahasan</strong>

            <p>
              ${q.explanation}
            </p>
          </div>

        </div>

      </article>
          `;
  });

  container.innerHTML = html;
  renderMath();
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderMath() {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }
}

window.onload = initApp;
