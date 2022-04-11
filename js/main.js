const modalWindow = document.querySelector('.modal'),
      buttonsModal = document.querySelectorAll('.button-play__wrap');

buttonsModal.forEach(item => {
  console.log(i);
  item.addEventListener('click', () => modalWindow.classList.remove('close'));
});

modalWindow.addEventListener('click', event => {
  const isModal = event.target.closest('.modal__inner');
  if (!isModal)  modalWindow.classList.add('close');
});