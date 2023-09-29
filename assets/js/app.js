import { Questions } from "./questions.module.js";

let questions = document.querySelectorAll(".quest");

questions.forEach((quest) => {
  quest.addEventListener("click", () => {
    Questions.mainFunction(quest);
  });
});

Questions.svgEdit();
