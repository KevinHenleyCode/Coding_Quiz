var question = document.querySelector('.question');
var answerA = document.querySelector('#answerA');
var answerB = document.querySelector('#answerB');
var answerC = document.querySelector('#answerC');
var answerD = document.querySelector('#answerD');
var correct = document.querySelector('h4');
var timeLeft = document.querySelector('h3');
var container = document.querySelector('.container');
var startBtn = document.querySelector('.startBtn');
var timerHide = document.querySelector('.timer')
var startRules = document.querySelector('.startRules');
var userBox = document.querySelector('.userBox');
var userInput = document.querySelector('.userInput');
var scoreInput = document.querySelector('.scoreInput');
var userScore = document.querySelector('.userScore');
var storageName = document.querySelector('.storageName')
var storageScore = document.querySelector('.storageScore')
var score = 0;
startBtn.addEventListener('click', start); 


var time = 60;
function timer() {
    timerHide.classList.remove('hide')
    
    setInterval(() => {
            time --;
            timeLeft.innerHTML = time;
            
            if (time <= 0) {
                gameOver()
            };
        }, 1000);
};


function back() {
    userScore.classList.add('hide')
    startRules.classList.remove('hide')
}

function start() {
    container.classList.remove('hide');
    startRules.classList.add('hide');
    timer();
    questionMaker(1);
};


function questionMaker(x) {
    if (x === 1) {   
        question.innerHTML = `A ____ is a chunk of code that can be used over and over.`;
        answerA.innerHTML = `<button onclick="checkAnswer(true, 'Question 1'), questionMaker(2)">Function</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(false, 'Question 1'), questionMaker(2)">Boolean</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(false, 'Question 1'), questionMaker(2)">HTML</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(false, 'Question 1'), questionMaker(2)">Computer</button>`;
    };
    
    if (x === 2) {
        question.innerHTML = `____ is a language used to style an website.`;
        answerA.innerHTML = `<button onclick="checkAnswer(false, 'Question 2'), questionMaker(3)">HTML</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(true, 'Question 2'), questionMaker(3)">CSS</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(false, 'Question 2'), questionMaker(3)">JavaScript</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(false, 'Question 2'), questionMaker(3)">Crayons</button>`;
    };
    
    if (x === 3) {
        question.innerHTML = `____ is a type of loop.`;
        answerA.innerHTML = `<button onclick="checkAnswer(true, 'Question 3'), questionMaker(4)">for</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(false, 'Question 3'), questionMaker(4)">if</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(false, 'Question 3'), questionMaker(4)">else</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(false, 'Question 3'), questionMaker(4)">array</button>`;
    };
    
    if (x === 4) {
        question.innerHTML = `Which element is the largest heading?`;
        answerA.innerHTML = `<button onclick="checkAnswer(false, 'Question 4'), questionMaker(5)">h4</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(false, 'Question 4'), questionMaker(5)">h3</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(false, 'Question 4'), questionMaker(5)">h2</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(true, 'Question 4'), questionMaker(5)">h1</button>`;
    };
    
    if (x === 5) {
        question.innerHTML = `____ can only be used once unlike class.`;
        answerA.innerHTML = `<button onclick="checkAnswer(false, 'Question 5'), gameOver()">div</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(false, 'Question 5'), gameOver()">onclick</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(true, 'Question 5'), gameOver()">id</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(false, 'Question 5'), gameOver()">string</button>`;
    };
};


function checkAnswer(choice, questionNum) {
    if (choice === true) {
        score ++;
        correct.innerHTML = `${questionNum} Correct!`;
    } else {
        correct.innerHTML = `${questionNum} Wrong!`;
        time -= 10
    };
};


function gameOver() {
    container.classList.add('hide');
    timerHide.classList.add('hide');
    correct.classList.add('hide');
    userBox.classList.remove('hide');
    scoreInput.innerHTML = `Score: ${score}`;
};


function storeUser() {

    var highScore = {
        score: score,
        name: userInput.value
    }
    
    console.log(`name: ${highScore.name} score: ${highScore.score}`);
    localStorage.setItem('player', JSON.stringify(highScore));  
}


function showScore() {
    userScore.classList.remove('hide')
    startRules.classList.add('hide')
    var getInfo = JSON.parse(localStorage.getItem('player'));
    storageName.innerHTML = `Name: <br> ${getInfo.name}`
    storageScore.innerHTML = `Score: <br> ${getInfo.score}`
}
