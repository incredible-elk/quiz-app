console.clear();

const modal = document.querySelector('.card__answer');
const btn = document.querySelector('button');

btn.addEventListener('click', () => modal.classList.toggle('open'));

window.onclick = function (event) {
  if (event.target.classList.contains('button--close')) {
    modal.classList.remove('open');
  }
};
