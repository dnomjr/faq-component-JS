let paragraphs = document.querySelectorAll(".all-quest"),
  questions = document.querySelectorAll(".quest");

let mainFunction = function (currentQuest) {
  let paragraph = currentQuest.nextElementSibling;

  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
    currentQuest.style.background = "none";

    showHide(paragraph);
    arrowReverse(currentQuest);
  } else {
    clickOnSelf(currentQuest, paragraph);
  }
};

let clickOnSelf = function (currentQuest, answer) {
  answer.style.display = "none";
  currentQuest.classList.remove("reverse");
  currentQuest.style.background =
    'no-repeat url("../../images/icon-arrow-down.svg")';
  currentQuest.style.backgroundPosition = "right";
};

let showHide = function (paragraph) {
  paragraphs.forEach((p) => {
    if (p.style.display === "block") {
      p.style.display = "none";
      paragraph.style.display = "block";
    }
  });
};

let arrowReverse = function (currentQuest) {
  questions.forEach((x) => {
    if (x.classList.contains("reverse")) {
      x.classList.remove("reverse");
      x.style.background = 'no-repeat url("../../images/icon-arrow-down.svg")';
      x.style.backgroundPosition = "right";
    }
  });

  if (!currentQuest.classList.contains("reverse")) {
    currentQuest.style.background = "none";
    currentQuest.classList.add("reverse");
  }
};

let svgEdit = function () {
  let main = document.querySelector(".main-content"),
    womanBlock = document.querySelector(".woman-block"),
    womanHidden = document.querySelector(".woman-hidden");

  if (window.screen.width < 900) {
    main.style.overflow = "hidden";
    womanBlock.style.display = "block";
    womanHidden.style.display = "hidden";
  }
};

export let Questions = {
  mainFunction: mainFunction,
  svgEdit: svgEdit,
};
