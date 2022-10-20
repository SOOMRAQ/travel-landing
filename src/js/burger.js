const burger = document.querySelector('.menu__icon');
const menuContent = document.querySelector('.menu__content');

burger.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  burger.classList.toggle('_active');
  menuContent.classList.toggle('_active');
});
