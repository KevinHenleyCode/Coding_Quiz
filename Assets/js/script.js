var question = document.querySelector('p')
var answer1 = document.querySelector('#answer1')
var answer2 = document.querySelector('.answer2')
var answer3 = document.querySelector('.answer3')
var answer4 = document.querySelector('.answer4')
var container = document.querySelector('.container')
var startBtn = document.querySelector('.startBtn')
var score = 0;


startBtn.addEventListener('click', start) 

function start() {

    container.classList.remove('hide')
    startBtn.classList.add('hide')


    
}

function questionMaker() {
        question.innerHTML = `What's a function?`
        answer1.innerHTML = '1'
        answer2.innerHTML = '2'
        answer3.innerHTML = '3'
        answer4.innerHTML = '4'
}



var answerCorrect = document.querySelector('.answer').dataset.correct
function checkAnswer() {
    if (answerCorrect == 'true') {
        alert('This is the correct answer')
    } else {
        alert('This is the wrong answer')
    
    }

    
}
