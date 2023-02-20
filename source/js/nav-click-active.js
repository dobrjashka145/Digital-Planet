document.querySelector('.page-header__logo').addEventListener('click', activeNone);

for (let i = 0; i < navLinks.length; i++) {
  const navLinks = document.querySelectorAll('.main-nav__item');
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
