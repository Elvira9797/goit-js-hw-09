import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

let timer = null;
let isActive = false;
let selectedDate = 0;
refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', () => {
  isActive = true;
  refs.startBtn.disabled = true;
  timer = setInterval(handleTime, 1000);
});

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (isActive) return;

    selectedDate = selectedDates[0].getTime();
    const timeDifference = toGetTimeDifferent(selectedDate);

    if (timeDifference <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        timeout: 2000,
      });
      return;
    }

    refs.startBtn.disabled = false;
  },
});

function handleTime() {
  const timeDifference = toGetTimeDifferent(selectedDate);
  const time = convertMs(timeDifference);
  attachToElement(time);
}

function toGetTimeDifferent(selectedDate) {
  const now = new Date().getTime();
  return selectedDate - now;
}

function attachToElement({ days, hours, minutes, seconds }) {
  if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
    clearInterval(timer);
  }
  refs.dataDays.textContent = days;
  refs.dataHours.textContent = hours;
  refs.dataMinutes.textContent = minutes;
  refs.dataSeconds.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
