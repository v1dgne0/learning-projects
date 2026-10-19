
const responses = {
    "привет": "Привет!",
    "помощь": "Список комманд..."
};

const commandInput = document.querySelector("#command-input");
const commandOutput = document.querySelector("#command-response");
const commandForm = document.querySelector("#command-form");

const mainTitle = document.querySelector("h2");
const showSkillButtom = document.querySelector("#show-skills-button");

const clicker = document.querySelector("#clicker");
const clickerCount = document.querySelector("#clicker-count");

const showHidebutton = document.querySelector("#show-hide");
const myInterests = document.querySelector("#my-interests");

commandForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const command = commandInput.value.trim().toLowerCase();

    if (responses[command]) {
        commandOutput.textContent = responses[command];
    } else {
        commandOutput.textContent = "Не знаю такую команду";
    }
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
    } else {
        showHidebutton.textContent = "Скрыть интересы";
    }
});
