let hours = document.querySelector(".timer__hours");
let minutes = document.querySelector(".timer__minutes");
let seconds = document.querySelector(".timer__seconds");

function getTime() {
  let date = new Date();

  let hourValue = date.getHours();
  let minuteValue = date.getMinutes();
  let secondValue = date.getSeconds();

  hours.textContent = hourValue;
  minutes.textContent = minuteValue;
  seconds.textContent = secondValue;

  if (hours.textContent.length < 2) {
    hours.textContent = "0" + hours.textContent;
  }

  if (minutes.textContent.length < 2) {
    minutes.textContent = "0" + minutes.textContent;
  }

  if (seconds.textContent.length < 2) {
    seconds.textContent = "0" + seconds.textContent;
  }
}

getTime();
setInterval(getTime, 1000);

// StopWatch

let minutesBlock = document.querySelector(".stopwatch__minutes");
let secondsBlock = document.querySelector(".stopwatch__seconds");
let millisecondBlock = document.querySelector(".stopwatch__millisecond");

let btnReset = document.querySelector(".btn--reset");
let btnStop = document.querySelector(".btn--stop");
let btnStart = document.querySelector(".btn--start");

let interval;
let min = 0;
let sec = 0;
let msec = 0;

function startStopwatch() {
  msec++;

  if (msec > 99) {
    sec++;
    secondsBlock.textContent = "0" + sec;

    msec = 0;
  }

  if (msec < 10) {
    millisecondBlock.textContent = "0" + msec;
  } else {
    millisecondBlock.textContent = msec;
  }

  if (sec < 10) {
    secondsBlock.textContent = "0" + sec;
  } else {
    secondsBlock.textContent = sec;
  }
}

btnStart.addEventListener("click", () => {

  interval = setInterval(startStopwatch, 10);
});



btnStop.addEventListener("click", () => {

  clearInterval(interval);
});

btnReset.addEventListener("click", () => {

  clearInterval(interval);

  min = 0;
  sec = 0;
  msec = 0;

  minutesBlock.textContent = "0" + min;
  secondsBlock.textContent = "0" + sec;
  millisecondBlock.textContent = "0" + msec;
});
