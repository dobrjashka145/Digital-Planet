const navLinks = document.querySelectorAll('.main-nav__item');
const navLogo = document.querySelector('.page-header__logo');

navLogo.addEventListener('click', activeNone);

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    activeNone();
    this.classList.add('main-nav__item--active');
  });
}

function activeNone () {
  let current = document.querySelectorAll('.main-nav__item--active');
  if (current.length > 0) {
    current[0].classList.remove('main-nav__item--active');
  }
}
