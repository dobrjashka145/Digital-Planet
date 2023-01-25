const navSite = document.querySelector('.main-nav');
const contactsHeader = document.querySelector('.page-header__contacts')
const navToggle = document.querySelector('.page-header__nav-toggle');

navSite.classList.remove('main-nav--nojs');
contactsHeader.classList.remove('page-header__contacts--nojs');
navToggle.classList.remove('page-header__nav-toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navSite.classList.contains('main-nav--closed')) {
    navSite.classList.remove('main-nav--closed');
    navSite.classList.add('main-nav--opened');
    contactsHeader.classList.remove('page-header__contacts--closed');
    contactsHeader.classList.add('page-header__contacts--opened');
    navToggle.classList.remove('page-header__nav-toggle--closed');
    navToggle.classList.add('page-header__nav-toggle--opened');
  } else {
    navSite.classList.add('main-nav--closed');
    navSite.classList.remove('main-nav--opened');
    contactsHeader.classList.add('page-header__contacts--closed');
    contactsHeader.classList.remove('page-header__contacts--opened');
    navToggle.classList.add('page-header__nav-toggle--closed');
    navToggle.classList.remove('page-header__nav-toggle--opened');
  }
});
