const QUESTIONS = [
  // BAGIAN A
  {
    id: 1,
    Selection: "A",
    category: "Sejarah",
    question: "Siapa yang dikenal sebagai “Bapak Komputer”",
    options: [
      "A. Alan Turing",
      "B. Bill Gates",
      "C. Charles Babbage",
      "D. John von Neumann",
    ],
    answer: "C",
    answerKey: "C. Charles Babbage",
    explanation: "PENJELASAN",
  },
];

let activeSection = "ALL";
let showAllAnswer = false;
let userAnswers = {};

function initApp() {
  renderQuestions();
}

function applyFilters() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const selectedTopic = document.getElementById("topicSelect").value;

  const filtered = QUESTIONS.filter((q) => {
    // Section Filter
    if (activeSection === "KUNCI") {
      // Show all when viewing key mode
    } else if (activeSection !== "ALL" && q.section !== activeSection) {
      return false;
    }
    // Topic Filter
    if (selectedTopic !== "ALL" && q.category !== selectedTopic) {
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
  function toggleAllAnswers() {
    showAllAnswers = !showAllAnswers;
    const btn = document.getElementById("toggleAllBtn");
    btn.innerHTML = showAllAnswers ? "🙈 Sembunyikan Kunci" : "👁️ Buka Kunci";

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
  if (q.type === "PG") {
    const selectedOption = document.querySelector(
      `input[name="q-${id}"]:checked`,
    );
    if (!selectedOption) {
      feedbackElem.innerHTML = `<span class="text-amber-600 font-medium">Pilih salah satu opsi jawaban terlebih dahulu.</span>`;
      return;
    }
    if (selectedOption.value === q.answer) {
      feedbackElem.innerHTML = `<span class="text-emerald-600 font-bold flex items-center gap-1">✓ Jawaban Benar! (${q.answerKey})</span>`;
    } else {
      feedbackElem.innerHTML = `<span class="text-rose-600 font-bold flex items-center gap-1">✗ Jawaban Kurang Tepat. Kunci: ${q.answerKey}</span>`;
    }
  } else if (q.type === "ISIAN") {
    const inputVal = document.getElementById(`input-${id}`).value.trim();
    if (!inputVal) {
      feedbackElem.innerHTML = `<span class="text-amber-600 font-medium">Tuliskan jawaban Anda terlebih dahulu.</span>`;
      return;
    }
    feedbackElem.innerHTML = `<span class="text-slate-700 font-medium">Jawaban Anda: <strong>${inputVal}</strong> | Kunci: <strong class="text-emerald-600">${q.answerKey}</strong></span>`;
  }

  // Reveal explanation after check
  const ansElem = document.getElementById(`explanation-${id}`);
  if (ansElem) ansElem.classList.remove("hidden");
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

    // Color badges per topic
    let categoryClass = "bg-slate-100 text-slate-700 border-slate-200";
    if (q.category.includes("Logika"))
      categoryClass = "bg-purple-50 text-purple-700 border-purple-200";
    if (q.category.includes("Matematika"))
      categoryClass = "bg-blue-50 text-blue-700 border-blue-200";
    if (q.category.includes("Java"))
      categoryClass = "bg-amber-50 text-amber-700 border-amber-200";
    if (q.category.includes("Pseudocode"))
      categoryClass = "bg-emerald-50 text-emerald-700 border-emerald-200";

    html += `
          <div class="card-box bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
              
              <!-- Top Metadata -->
              <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div class="flex items-center gap-2">
                      <span class="px-2.5 py-0.5 rounded-lg bg-slate-900 text-white font-extrabold text-xs">
                          Soal #${q.id}
                      </span>
                      <span class="px-2.5 py-0.5 rounded-full border text-xs font-medium ${categoryClass}">
                          ${q.category}
                      </span>
                      <span class="text-xs text-slate-400 font-medium">
                          Bagian ${q.section} (${q.type})
                      </span>
                  </div>
              </div>

              <!-- Question Body -->
              <div class="text-sm sm:text-base text-slate-800 font-normal leading-relaxed whitespace-pre-line mb-4">
                  ${q.question}
              </div>

              <!-- Optional Code Snippet -->
              ${
                q.code
                  ? `
              <div class="mb-4 bg-slate-900 text-slate-100 rounded-xl p-3.5 text-xs sm:text-sm font-mono overflow-x-auto border border-slate-800">
                  <pre><code>${escapeHtml(q.code)}</code></pre>
              </div>
              `
                  : ""
              }

              <!-- Options for PG -->
              ${
                q.type === "PG" && !isKunciMode
                  ? `
              <div class="space-y-2 mb-4">
                  ${q.options
                    .map((opt, idx) => {
                      const optVal = String.fromCharCode(97 + idx); // a, b, c, d, e
                      return `
                      <label class="flex items-start gap-3 p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition text-xs sm:text-sm">
                          <input type="radio" name="q-${q.id}" value="${optVal}" class="mt-0.5 text-brand-600 focus:ring-brand-500">
                          <span>${opt}</span>
                      </label>
                      `;
                    })
                    .join("")}
              </div>
              `
                  : ""
              }
              <!-- Action Buttons -->
              <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 no-print">
                  <div id="feedback-${q.id}" class="text-xs sm:text-sm"></div>
                  <div class="flex items-center gap-2 ml-auto">
                      ${
                        !isKunciMode && q.type !== "ESSAY"
                          ? `
                      <button onclick="checkUserAnswer(${q.id})" class="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium text-xs transition">
                          Cek Jawaban
                      </button>
                      `
                          : ""
                      }
                      <button onclick="toggleSingleAnswer(${q.id})" class="px-3 py-1.5 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-lg font-medium text-xs transition flex items-center gap-1">
                          💡 Kunci & Pembahasan
                      </button>
                  </div>
              </div>

              <!-- Explanation Box -->
              <div id="explanation-${q.id}" class="${showAllAnswers || isKunciMode ? "" : "hidden"} mt-4 pt-4 border-t border-dashed border-slate-200 bg-slate-50 -mx-5 -mb-5 p-5 rounded-b-2xl">
                  <div class="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Kunci Jawaban: <span class="bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 text-emerald-900">${q.answerKey}</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-700 space-y-1 leading-relaxed whitespace-pre-line">
                      <strong class="text-slate-900 block font-semibold mb-1">Langkah Pembahasan:</strong>
                      ${q.explanation}
                  </div>
              </div>

          </div>
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
