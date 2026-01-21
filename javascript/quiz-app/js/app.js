const questionList = [
  new Question(
    "1-Which one is a Javascript package management application? ",
    { a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm" },
    "d",
  ),

  new Question(
    "2-In which scope is it not considered front-end? ",
    { a: "Css", b: "sql", c: "javascript", d: "html" },
    "b",
  ),
  new Question(
    "3-Which one is considered within the scope of back-end?",
    { a: "Node.js", b: "Typescript", c: "angular", d: "react" },
    "a",
  ),
  new Question(
    "4-Which one does not use the Javascript programming language? ",
    { a: "react", b: "angular", c: "vuejs", d: "asp.net" },
    "d",
  ),
];

const quiz = new Quiz(questionList);
const ui = new UI();

ui.btnStart.addEventListener("click", function () {
  startTimer(10);
  startTimerLine();
  ui.quizBox.classList.add("active");
  ui.buttonBox.classList.remove("active");
  ui.showQuestion(quiz.getQuestion());
  ui.showQuestionofNumber(quiz.questionIndex + 1, quiz.questions.length);
  ui.btnNext.classList.remove("show");
});

ui.btnNext.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex) {
    startTimer(10);
    startTimerLine();
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionofNumber(quiz.questionIndex + 1, quiz.questions.length);
    ui.btnNext.classList.remove("show");

    console.log(quiz);
  } else {
    ui.scoreBox.classList.add("active");
    ui.quizBox.classList.remove("active");
    ui.showScore(quiz.correctAnswerNumber, quiz.questions.length);
  }
});

function optionSelected(e) {
  clearInterval(counter);
  clearInterval(counterLine);

  let selectedElement = e.target;
  if (selectedElement.nodeName == "SPAN") {
    selectedElement = selectedElement.parentElement;
  }
  const answer = e.target.textContent[0];
  const question = quiz.getQuestion();

  if (question.checkAnswer(answer)) {
    quiz.correctAnswerNumber += 1;
    selectedElement.classList.add("correct");
    selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    selectedElement.classList.add("incorrect");
    selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }
  quiz.questionIndex += 1;
  ui.disableAllOption();
  ui.btnNext.classList.add("show");
}

ui.btnQuit.addEventListener("click", function () {
  window.location.reload();
});

ui.btnReplay.addEventListener("click", function () {
  quiz.questionIndex = 0;
  quiz.correctAnswerNumber = 0;
  // start button
  ui.btnStart.click();
  ui.scoreBox.classList.remove("active");
});

let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    ui.timeSecond.textContent = time;
    time--;

    if (time < 0) {
      clearInterval(counter);
      ui.timeText.textContent = "Time ended";

      ui.disableAllOption();
      quiz.questionIndex += 1;

      ui.btnNext.classList.add("show");
    }
  }
}

let counterLine;
function startTimerLine() {
  let line_width = 0;

  counterLine = setInterval(timer, 20);

  function timer() {
    line_width += 1;

    ui.timeLine.style.width = line_width + "px";

    if (line_width > 549) {
      clearInterval(counterLine);
    }
  }
}
