import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const valueFromInputs = Object.fromEntries(new FormData(event.target));

  getPromise(valueFromInputs);
});

function getPromise({ delay, step, amount }) {
  let position = 1;

  const intervalId = setInterval(() => {
    if (position > Number(amount)) {
      clearInterval(intervalId);
      return;
    }

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    position += 1;

    delay = Number(delay) + Number(step);
  }, step);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
