// uses querySelectors to select the elements
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
var storageName = document.querySelector('.storageName');
var storageScore = document.querySelector('.storageScore');
var score = 0;
startBtn.addEventListener('click', start); 


/* sets the timer for 60 seconds and if the 
timer runs out it will trigger the gameover function */
var time = 60;
function timer() {
    timerHide.classList.remove('hide');
    
    setInterval(() => {
            time --;
            timeLeft.innerHTML = time;
            
            if (time <= 0) {
                gameOver();
            };
        }, 1000);
};


// this powers the back button to hide the userScore and show the startRules
function back() {
    userScore.classList.add('hide');
    startRules.classList.remove('hide');
};


// starts the timer and gives the questionMaker the argument of 1
function start() {
    container.classList.remove('hide');
    startRules.classList.add('hide');
    timer();
    questionMaker(1);
};


/* adds questions to the html and passes back arguments to the function to trigger the next question */
function questionMaker(x) {
    if (x === 1) {   
        question.innerHTML = `A ____ is a chunk of code that can be used over and over.`;
        answerA.innerHTML = `<button onclick="checkAnswer(true, 'Question 1'), questionMaker(2)">Function</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(false, 'Question 1'), questionMaker(2)">Boolean</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(false, 'Question 1'), questionMaker(2)">HTML</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(false, 'Question 1'), questionMaker(2)">Computer</button>`;
    };
    
    if (x === 2) {
        question.innerHTML = `____ is used to select an element.`;
        answerA.innerHTML = `<button onclick="checkAnswer(false, 'Question 2'), questionMaker(3)">HTML</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(true, 'Question 2'), questionMaker(3)">quereySelector</button>`;
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
        question.innerHTML = `Which stores multiple items?`;
        answerA.innerHTML = `<button onclick="checkAnswer(false, 'Question 4'), questionMaker(5)">h4</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(false, 'Question 4'), questionMaker(5)">if</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(false, 'Question 4'), questionMaker(5)">function</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(true, 'Question 4'), questionMaker(5)">array</button>`;
    };
    
    if (x === 5) {
        question.innerHTML = `____ will initialize a variable.`;
        answerA.innerHTML = `<button onclick="checkAnswer(false, 'Question 5'), gameOver()">echo</button>`;
        answerB.innerHTML = `<button onclick="checkAnswer(false, 'Question 5'), gameOver()">bubble</button>`;
        answerC.innerHTML = `<button onclick="checkAnswer(true, 'Question 5'), gameOver()">var</button>`;
        answerD.innerHTML = `<button onclick="checkAnswer(false, 'Question 5'), gameOver()">initialize</button>`;
    };
};


// checks to see if the button that was pushed is true or false
function checkAnswer(choice, questionNum) {
    if (choice === true) {
        score ++;
        correct.innerHTML = `${questionNum} Correct!`;
    } else {
        correct.innerHTML = `${questionNum} Wrong!`;
        time -= 10
    };
};


// adds and removes the hide class and adds the score to the scoreInput
function gameOver() {
    container.classList.add('hide');
    timerHide.classList.add('hide');
    correct.classList.add('hide');
    userBox.classList.remove('hide');
    scoreInput.innerHTML = `Score: ${score}`;
};


// adds object with the user input and score to the localStorage
function storeUser() {
    var highScore = {
        score: score,
        name: userInput.value
    };
    
    console.log(`name: ${highScore.name} score: ${highScore.score}`);
    localStorage.setItem('player', JSON.stringify(highScore));  
};


// adds the name and score to the h3 elements to show in  highScore
function showScore() {
    userScore.classList.remove('hide');
    startRules.classList.add('hide');
    var getInfo = JSON.parse(localStorage.getItem('player'));
    storageName.innerHTML = `Name: <br> ${getInfo.name}`;
    storageScore.innerHTML = `Score: <br> ${getInfo.score}`;
};
