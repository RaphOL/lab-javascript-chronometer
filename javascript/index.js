const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  chronometer.startClick();
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML += `<li class="splitss">${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  document.querySelectorAll('.splitss').forEach(element => {
    element.remove();
  });
}

function setStopBtn() {
  btnLeft.classList.toggle("stop");
  btnLeft.innerHTML === "STOP" ? btnLeft.innerHTML = "START" : btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.toggle("split");
  btnRight.innerHTML === "SPLIT" ? btnRight.innerHTML = "RESET" : btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.innerHTML === "STOP" ? chronometer.stopClick() : printTime();
}

function setResetBtn() {
  clearSplits();
  chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  setStartBtn();
  setStopBtn();
  setSplitBtn();
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  btnRight.innerHTML === "RESET" ? setResetBtn() : printSplit();
});