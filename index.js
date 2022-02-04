//변수 모음

const startButton = document.querySelector(".start-button");
let randomNum = [];
const userInput = document.querySelector(".user-input");
let strikeNum;
let ballNum;
const nowScore = document.querySelector("h2");
let countNum = 10;
const chance = document.querySelector(".chance");


//함수 모음

function makeRandomNum () {
    for (let i = 0; i < 3; i++) {
        randomNum[i] = String(Math.floor(Math.random() * 10));
    }
    console.log(randomNum);
    startButton.textContent = '재시작';
    nowScore.textContent = '';
    countNum = 10;
    chance.textContent = `남은기회 : ${countNum}`;
    userInput.disabled = false;
    userInput.value = '';
}



function play () {
    if (userInput.value.length !== 3) {
        alert('3자리 숫자를 입력해주세요')
        return
    }
    strikeNum = 0;
    ballNum = 0;
    for (let i = 0; i < 3; i++) {
        if (userInput.value[i] === randomNum[i]) {
            strikeNum++;
        }
    }
    if (strikeNum === 3) {
        alert('🎉정답🎉');
        return
    } else if (strikeNum === 2) {
        nowScore.textContent = '2S 0B';
    } else if (strikeNum === 1) {
        nowScore.textContent = `1S ${ballCount() - 1}B`;
    } else {
        if (ballCount() === 0) {
            nowScore.textContent = 'OUT';
        } else {
            nowScore.textContent = `0S ${ballCount()}B`;
        }
    }
    countNum--;
    chance.textContent = `남은기회 : ${countNum}`;
    if (countNum === 0) {
        userInput.disabled = true;
    }
}

function ballCount () {
    ballNum = 0;
    for (let i = 0; i < 3; i++) {
        if (randomNum.includes(userInput.value[i])) {
            ballNum++;
        }
    }
    return ballNum;
}

//이벤트 모음
startButton.addEventListener("click", makeRandomNum);