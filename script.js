
const responses = {
    "привет": "Привет!",
    "помощь": "Список комманд..."
};

//Ответ бота
const commandInput = document.querySelector("#command-input");
const commandOutput = document.querySelector("#command-response");
const commandForm = document.querySelector("#command-form");

//Скилы
const mainTitle = document.querySelector("h2");
const showSkillButton = document.querySelector("#show-skills-button");

//Кликер
const clicker = document.querySelector("#clicker");
const clickerCount = document.querySelector("#clicker-count");

//Интересы
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

showSkillButton.addEventListener("click", function () {
    mainTitle.textContent = "Мои навыки";
});

let clicks = 0;

clicker.addEventListener("click", function () {
    clicks += 1;
    clickerCount.textContent = clicks;
});

function toggleInterests(){
    myInterests.hidden = !myInterests.hidden;

    if (myInterests.hidden) {
        showHidebutton.textContent = "Показать интересы";
    } else {
        showHidebutton.textContent = "Скрыть интересы";
    }
}

showHidebutton.addEventListener("click", toggleInterests);
