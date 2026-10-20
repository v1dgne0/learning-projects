
console.log("Привет");

const userName = "Владислав";
const projectsCount = 4;
const age = 19;
const message = "Мне лет: ";
const nextAge = age + 1;

console.log(message + age);
console.log(nextAge);

function checkProjects(x) {
    if (x >= 4) {
        return true;
    } else {
        return false;
    }
}

const hasEnoughProjects = checkProjects(projectsCount);

console.log(hasEnoughProjects);

// Массивы и методы filter / find
const scores = [80, 69, 45, 35, 89, 92, 65];

const goodscores = scores.filter(function (score) {
    return score >= 70;
});

const firstTopScore = scores.find(function (score) {
    return score >= 90;
});

console.log(goodscores);
console.log(firstTopScore);

async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );
    
    const user = response.json();

    console.log(user.email);
}

getUser();