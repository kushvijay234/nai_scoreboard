/* 
* Clock 
*/ 
let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 

let minute = 0, second = 0, count = 0;
let timer = false;

startBtn.addEventListener('click', function () { 
    if (!timer) { // 🔹 Prevent multiple clicks 🔹
        timer = true; 
        stopWatch(); 
        startBtn.disabled = true; // 🔹 Disable start button after first click 🔹
        stopBtn.disabled = false; // 🔹 Enable stop button when started 🔹
    }
}); 

stopBtn.addEventListener('click', function () { 
    timer = false; 
    startBtn.disabled = false; // 🔹 Allow restart without reset 🔹
    stopBtn.disabled = true;  // 🔹 Disable stop after stopping 🔹
}); 

resetBtn.addEventListener('click', function () { 
    timer = false; 
    minute = 0; 
    second = 0; 
    count = 0; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
    startBtn.disabled = false; // 🔹 Enable start button on reset 🔹
    stopBtn.disabled = true;  // 🔹 Disable stop button after reset 🔹
}); 

function stopWatch() { 
    if (timer) { 
        count++; 

        if (count == 100) { 
            second++; 
            count = 0; 
        } 

        if (second == 60) { 
            minute++; 
            second = 0; 
        } 

        let minString = minute < 10 ? "0" + minute : minute; 
        let secString = second < 10 ? "0" + second : second; 
        let countString = count < 10 ? "0" + count : count; 

        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        document.getElementById('count').innerHTML = countString; 

        setTimeout(stopWatch, 10); 
    } 
}

/*
* Yellow Player
*/ 
const yellowPlayerPoint = document.getElementById("yellow-player-point");
const ipponButtonYellow = document.getElementById("ippon-yellow");
const wazaariButtonYellow = document.getElementById("waza-ari-yellow");

ipponButtonYellow.addEventListener("click", function () {
    let currentPoint = parseInt(yellowPlayerPoint.textContent);
    currentPoint += 2;
    yellowPlayerPoint.textContent = currentPoint.toString();
});

wazaariButtonYellow.addEventListener("click", function () {
    let currentPoint = parseInt(yellowPlayerPoint.textContent);
    currentPoint += 1;
    yellowPlayerPoint.textContent = currentPoint.toString();
});

/*
* Black Player
*/ 
const blackPlayerPoint = document.getElementById("black-player-point");
const ipponButtonBlack = document.getElementById("ippon-black");
const wazaariButtonBlack = document.getElementById("waza-ari-black");

ipponButtonBlack.addEventListener("click", function () {
    let currentPoint = parseInt(blackPlayerPoint.textContent);
    currentPoint += 2;
    blackPlayerPoint.textContent = currentPoint.toString();
});

wazaariButtonBlack.addEventListener("click", function () {
    let currentPoint = parseInt(blackPlayerPoint.textContent);
    currentPoint += 1;
    blackPlayerPoint.textContent = currentPoint.toString();
});

/*
* Yellow Player plus Minus button (🔹 Prevent Negative Values 🔹)
*/ 
const yellowMinsButton = document.querySelector(".yellow-mins");
const yellowPlusButton = document.querySelector(".yellow-plus");

yellowMinsButton.addEventListener("click", function () {
    let currentPoint = parseInt(yellowPlayerPoint.textContent);
    if (currentPoint > 0) { // 🔹 Prevent going negative 🔹
        currentPoint -= 1;
        yellowPlayerPoint.textContent = currentPoint.toString();
    }
});

yellowPlusButton.addEventListener("click", function () {
    let currentPoint = parseInt(yellowPlayerPoint.textContent);
    currentPoint += 1;
    yellowPlayerPoint.textContent = currentPoint.toString();
});

/*
* Black Player plus Minus button (🔹 Prevent Negative Values 🔹)
*/ 
const blackMinsButton = document.querySelector(".black-mins");
const blackPlusButton = document.querySelector(".black-plus");

blackMinsButton.addEventListener("click", function () {
    let currentPoint = parseInt(blackPlayerPoint.textContent);
    if (currentPoint > 0) { // 🔹 Prevent going negative 🔹
        currentPoint -= 1;
        blackPlayerPoint.textContent = currentPoint.toString();
    }
});

blackPlusButton.addEventListener("click", function () {
    let currentPoint = parseInt(blackPlayerPoint.textContent);
    currentPoint += 1;
    blackPlayerPoint.textContent = currentPoint.toString();
});
