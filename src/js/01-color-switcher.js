const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId = null;
let isActive = false;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  btnStatus(refs.startBtn, refs.stopBtn);

  if (isActive) return;
  isActive = true;

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  btnStatus(refs.stopBtn, refs.startBtn);
  isActive = false;
  clearInterval(timerId);
}

function btnStatus(activeBtn, inactiveBtn) {
  activeBtn.disabled = true;
  inactiveBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
