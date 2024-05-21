// script.js
let startTime;
let running = false;
let interval;

function startStop() {
    if (!running) {
        start();
    } else {
        stop();
    }
}

function start() {
    startTime = Date.now() - (interval || 0);
    running = true;
    document.getElementById("startStop").innerText = "Stop";
    interval = setInterval(updateDisplay, 10);
}

function stop() {
    running = false;
    document.getElementById("startStop").innerText = "Start";
    clearInterval(interval);
}

function reset() {
    stop();
    interval = null;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    const timeElapsed = formatTime(Date.now() - startTime);
    const lapItem = document.createElement("li");
    lapItem.innerText = timeElapsed;
    document.getElementById("laps").appendChild(lapItem);
}

function updateDisplay() {
    const elapsedTime = Date.now() - startTime;
    document.getElementById("display").innerText = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millisecondsFormatted = String(milliseconds % 1000).padStart(3, "0");
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${millisecondsFormatted.slice(0, 2)}`;
}
