console.log("Привет")

const userName = "Владислав";
const projectsCount = 4;
const age = 19;
const message = "Мне лет: ";
const nextAge = age + 1;

console.log(message + age);
console.log(nextAge);

const responses = {
    "привет": "привет!",
    "помощь": "список комманд..." 
};
const responseButton = document.querySelector("#response-button");
const commandInput = document.querySelector("#command-input");
const commandOutput = document.querySelector("#command-response");

const scores = [80, 69, 45, 35, 89, 92, 65];
const mainTitle = document.querySelector("h2");
const showSkillButtom = document.querySelector("#show-skills-button");
const clicker = document.querySelector("#clicker");
const clickerCount = document.querySelector("#clicker-count");
const showHidebutton = document.querySelector("#show-hide");
const myInterests = document.querySelector("#my-interests")

function checkProjects(x) {
    if (x >= 4) {
        return true;
    }
    else {
        return false;
    }
}

responseButton.addEventListener("click", function () {
    if (responses[commandInput.value.trim().toLowerCase()]) {
        commandOutput.textContent = responses[commandInput.value.trim().toLowerCase()]
    }
    else{
        commandOutput.textContent = "Не знаю такую команду"
    }
});



const goodscores = scores.filter(function (score) {
    return score >= 70;
});

const firstTopScore = scores.find(function (score) {
    return score >= 90;
});

showSkillButtom.addEventListener("click", function () {
    mainTitle.textContent = "Мои навыки";
});

let clicks = 0;

clicker.addEventListener("click", function () {
    clicks += 1;
    clickerCount.textContent = clicks;
});

showHidebutton.addEventListener("click", function () {
    myInterests.hidden = !myInterests.hidden;
    if (myInterests.hidden) {
        showHidebutton.textContent = "Показать интересы";
    }
    else {
        showHidebutton.textContent = "Скрыть интересы";
    }
});

const hasEnoughProjects = checkProjects(projectsCount);

console.log(hasEnoughProjects);
console.log(goodscores);
console.log(firstTopScore);