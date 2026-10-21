//Ответ бота
const responses = {
    "привет": "Привет!",
    "помощь": "Список комманд..."
};

const commandInput = document.querySelector("#command-input");
const commandOutput = document.querySelector("#command-response");
const commandForm = document.querySelector("#command-form");

commandForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const command = commandInput.value.trim().toLowerCase();

    if (responses[command]) {
        commandOutput.textContent = responses[command];
    } else {
        commandOutput.textContent = "Не знаю такую команду";
    }
});



//Скилы
const mainTitle = document.querySelector("h2");
const showSkillButton = document.querySelector("#show-skills-button");

showSkillButton.addEventListener("click", function () {
    mainTitle.textContent = "Мои навыки";
});



//Кликер
const clicker = document.querySelector("#clicker");
const clickerCount = document.querySelector("#clicker-count");

let clicks = 0;

clicker.addEventListener("click", function () {
    clicks += 1;
    clickerCount.textContent = clicks;
});



//Интересы
const showHidebutton = document.querySelector("#show-hide");
const myInterests = document.querySelector("#my-interests");

function toggleInterests() {
    myInterests.hidden = !myInterests.hidden;

    if (myInterests.hidden) {
        showHidebutton.textContent = "Показать интересы";
    } else {
        showHidebutton.textContent = "Скрыть интересы";
    }
}
showHidebutton.addEventListener("click", toggleInterests);



//Данные user
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (response.status == 404) {
            throw new Error("Пользователь не найден");
        }

        if (response.status == 500) {
            throw new Error("Ошибка сервера");
        }

    } catch (error) {
        if (error.message == "Пользователь не найден" && error.message == "Ошибка сервера") {
            userName.textContent = error.message;
            userEmail.textContent = error.message;
        } else {
            userName.textContent = error.message;
            userEmail.textContent = "Не удалось подключиться к серверу";
        }
    }
}
getUser();

const user = await response.json();

userName.textContent = user.name;
userEmail.textContent = user.email;





