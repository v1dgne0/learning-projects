
console.log("Привет");


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

