const button = document.querySelector('.hero-block__button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close-button');

const closeModal = () => {
  modal.classList.remove('modal--open');
  modalCloseButton.removeEventListener('click', closeModal);
}

button.addEventListener('click', () => {
  modal.classList.add('modal--open');
  modalCloseButton.addEventListener('click', closeModal);
});
