const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".header__togggle");

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');

  if (navMain.classList.contains('main-nav--closed')) {
    navToggle.classList.remove('header__togggle--closed');
    navToggle.classList.add('header__togggle--opened');
  } else {
    navToggle.classList.remove('header__togggle--opened');
    navToggle.classList.add('header__togggle--closed');
  }
});
