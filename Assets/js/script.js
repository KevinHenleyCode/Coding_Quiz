var question = document.querySelector('p');
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
var storageShow = document.querySelector('.storageShow');
var score = 0;
startBtn.addEventListener('click', start); 


var time = 100;
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


function start() {
    container.classList.remove('hide');
    startRules.classList.add('hide');
    timer();
    questionMaker(1);
};


function questionMaker(x) {
    if (x === 1) {   
        question.innerHTML = `Question 1`;
        answerA.innerHTML = `<button onclick="checkAnswer(true, 'Question 1'), questionMaker(2)">1</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(false, 'Question 1'), questionMaker(2)">2</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(false, 'Question 1'), questionMaker(2)">3</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(false, 'Question 1'), questionMaker(2)">4</button>`;
    };
    
    if (x === 2) {
        question.innerHTML = `Question 2`;
        answerA.innerHTML = `<button onclick="checkAnswer(false, 'Question 2'), questionMaker(3)">5</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(true, 'Question 2'), questionMaker(3)">6</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(false, 'Question 2'), questionMaker(3)">7</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(false, 'Question 2'), questionMaker(3)">8</button>`;
    };
    
    if (x === 3) {
        question.innerHTML = `Question 3`;
        answerA.innerHTML = `<button onclick="checkAnswer(false, 'Question 3'), questionMaker(4)">5</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(true, 'Question 3'), questionMaker(4)">6</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(false, 'Question 3'), questionMaker(4)">7</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(false, 'Question 3'), questionMaker(4)">8</button>`;
    };
    
    if (x === 4) {
        question.innerHTML = `Question 4`;
        answerA.innerHTML = `<button onclick="checkAnswer(false, 'Question 4'), questionMaker(5)">5</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(true, 'Question 4'), questionMaker(5)">6</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(false, 'Question 4'), questionMaker(5)">7</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(false, 'Question 4'), questionMaker(5)">8</button>`;
    };
    
    if (x === 5) {
        question.innerHTML = `Question 5`;
        answerA.innerHTML = `<button onclick="checkAnswer(false, 'Question 5')">5</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(true, 'Question 5')">6</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(false, 'Question 5')">7</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(false, 'Question 5')">8</button>`;
    };
};


function checkAnswer(choice, questionNum) {
    if (choice === true) {
        score ++;
        correct.innerHTML = `${questionNum} Correct!`;
    } else {
        correct.innerHTML = `${questionNum} Wrong!`;
        time -= 5
    
    };
};

function gameOver() {
    container.classList.add('hide');
    timerHide.classList.add('hide');
    correct.classList.add('hide');
    userBox.classList.remove('hide');
    scoreInput.innerHTML = `Score: ${score}`;
};


function storeUser(e) {
    e.preventDefault();
    
    var user = {
        score: score,
        name: userInput.value
    }
    console.log(`name: ${user.name} score: ${user.score}`);
    localStorage.setItem('player', JSON.stringify(user));

    var getInfo = JSON.parse(localStorage.getItem('player'));
    storageShow.innerHTML = `Name: ${player.name} Score: ${player.score}`
}
