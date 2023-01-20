const date = new Date();
const currentYear = date.getFullYear();

const correctAswer = 'The answer is correct!';
const errorAnswer = "The answer isn't correct!";

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const answerNode = document.querySelector('.js-answer');

buttonNode.addEventListener('click', function() {
    let inputValue = inputNode.value;

    if (!inputValue) {
        return;
    }

    if (Number(inputValue) === currentYear) {
        answerNode.innerHTML = correctAswer;
        answerNode.style.color = '#16d406';
    } else {
        answerNode.innerHTML = errorAnswer;
        answerNode.style.color = '#ff0000';
    }
});