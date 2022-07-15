
const ApiToBeFetched = "https://www.algoexpert.io/api/fe/questions";

fetchAndAppendQuestions();

function fetchAndAppendQuestions() {
    const questions = await fetchAPI();
    const questionsByCategory = getQustionsByCategory(questions);
}

function createCategory(category, questions) {
    const createDiv = document.createElement("div");
    createDiv.classList.add('category');
    const createH2 = document.createElement('h2');
    createH2.textContent = category;
    questions.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        const createH3 = document.createElement('h3');
        createH3.textContent = question.name;
        questionDiv.append(createH3);
        createDiv.append(questionDiv);
    })
}
async function fetchAPI() {
    const response = await fetch(ApiToBeFetched);
    const questions = await response.json();
    return questions;
}
function getQustionsByCategory() {
    const questionsByCategory = {};
    questions.forEach(question => {
        if (questionsByCategory.hasOwnProperty(question.category)) {
            questionsByCategory[question.category].push(question);

        } else {
            questionsByCategory[question.category] = [question];
        }
    }); return questionsByCategory;
}