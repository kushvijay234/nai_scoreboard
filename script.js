/* 
* Clock 
*/ 
let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 

let minute = 0, second = 0, count = 0;
let timer = false;

startBtn.addEventListener('click', function () { 
    if (!timer) { // Prevent multiple clicks
        timer = true; 
        stopWatch(); 
        startBtn.disabled = true; // Disable start button after first click
        stopBtn.disabled = false; // Enable stop button when started
    }
}); 

stopBtn.addEventListener('click', function () { 
    timer = false; 
    startBtn.disabled = false; // Allow restart without reset
    stopBtn.disabled = true;  // Disable stop after stopping
}); 

resetBtn.addEventListener('click', function () { 
    timer = false; 
    minute = 0; 
    second = 0; 
    count = 0; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
    startBtn.disabled = false; // Enable start button on reset
    stopBtn.disabled = true;  // Disable stop button after reset
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
*
*/
// Get a reference to the IPPON button and the yellow-player-point element
const ipponButton = document.getElementById("ippon-yellow");
const yellowPlayerPoint = document.getElementById("yellow-player-point");

// Add a click event listener to the IPPON button
ipponButton.addEventListener("click", function () {
    // Get the current point value, convert it to a number, and increment by 1
    let currentPoint = parseInt(yellowPlayerPoint.textContent);
    currentPoint += 2;

    // Update the point value with the new value
    yellowPlayerPoint.textContent = currentPoint.toString();
});

 // Get a reference to the waza-ari button and the yellow-player-point element
 const wazaariButton = document.getElementById("waza-ari-yellow");
 const yellowPlayerPoint2 = document.getElementById("yellow-player-point");
 wazaariButton.addEventListener("click", function () {
    // Get the current point value, convert it to a number, and increment by 1
    let currentPoint = parseInt(yellowPlayerPoint2.textContent);
    currentPoint += 1;

    // Update the point value with the new value
    yellowPlayerPoint2.textContent = currentPoint.toString();
});


/*
* Black Player
*
*/
// Get a reference to the IPPON button and the black-player-point element
const ipponButtonBlack = document.getElementById("ippon-black");
const blackPlayerPoint = document.getElementById("black-player-point");

// Add a click event listener to the IPPON button
ipponButtonBlack.addEventListener("click", function () {
    // Get the current point value, convert it to a number, and increment by 1
    let currentPoint = parseInt(blackPlayerPoint.textContent);
    currentPoint += 2;

    // Update the point value with the new value
    blackPlayerPoint.textContent = currentPoint.toString();
});

 // Get a reference to the waza-ari button and the yellow-player-point element
 const wazaariButtonBlack = document.getElementById("waza-ari-black");
 const blackPlayerPoint2 = document.getElementById("black-player-point");
 wazaariButtonBlack.addEventListener("click", function () {
    // Get the current point value, convert it to a number, and increment by 1
    let currentPoint = parseInt(blackPlayerPoint2.textContent);
    currentPoint += 1;

    // Update the point value with the new value
    blackPlayerPoint2.textContent = currentPoint.toString();
});


/*
* Yellow Player plus Mins button
*
*/
// Get references to the elements
const yellowMinsButton = document.querySelector(".yellow-mins");
const yellowPlusButton = document.querySelector(".yellow-plus");

// Add click event listeners for decrementing and incrementing points
yellowMinsButton.addEventListener("click", function () {
    let currentPoint = parseInt(yellowPlayerPoint.textContent);
    currentPoint -= 1;
    yellowPlayerPoint.textContent = currentPoint.toString();
});

yellowPlusButton.addEventListener("click", function () {
    let currentPoint = parseInt(yellowPlayerPoint.textContent);
    currentPoint += 1;
    yellowPlayerPoint.textContent = currentPoint.toString();
});


/*
* Black Player plus Mins button
*
*/
// Get references to the elements
const blackMinsButton = document.querySelector(".black-mins");
const blackPlusButton = document.querySelector(".black-plus");

// Add click event listeners for decrementing and incrementing points
blackMinsButton.addEventListener("click", function () {
    let currentPoint = parseInt(blackPlayerPoint.textContent);
    currentPoint -= 1;
    blackPlayerPoint.textContent = currentPoint.toString();
});

blackPlusButton.addEventListener("click", function () {
    let currentPoint = parseInt(blackPlayerPoint.textContent);
    currentPoint += 1;
    blackPlayerPoint.textContent = currentPoint.toString();
});



