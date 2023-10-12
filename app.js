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
    hours.textContent = "0" + hours.textContent
  }

  if (minutes.textContent.length < 2) {
    minutes.textContent = "0" + minutes.textContent
  }

  if (seconds.textContent.length < 2) {
    seconds.textContent = "0" + seconds.textContent
  }

};

setInterval(getTime, 1000)