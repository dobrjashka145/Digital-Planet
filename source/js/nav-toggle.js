const navSite = document.querySelector('.main-nav');
const contactsHeader = document.querySelector('.page-header__contacts')
const navToggle = document.querySelector('.page-header__nav-toggle');

const navSiteInner = document.querySelector('.main-nav-inner');
const contactsHeaderInner = document.querySelector('.page-header__contacts-inner')
const navToggleInner = document.querySelector('.page-header__nav-toggle-inner');

navSite.classList.remove('main-nav--nojs');
contactsHeader.classList.remove('page-header__contacts--nojs');
navToggle.classList.remove('page-header__nav-toggle--nojs');

navSiteInner.classList.remove('main-nav-inner--nojs');
contactsHeaderInner.classList.remove('page-header__contacts-inner--nojs');
navToggleInner.classList.remove('page-header__nav-toggle-inner--nojs');

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

navToggleInner.addEventListener('click', function () {
  if (navSiteInner.classList.contains('main-nav-inner--closed')) {
    navSiteInner.classList.remove('main-nav-inner--closed');
    navSiteInner.classList.add('main-nav-inner--opened');
    contactsHeaderInner.classList.remove('page-header__contacts-inner--closed');
    contactsHeaderInner.classList.add('page-header__contacts-inner--opened');
    navToggleInner.classList.remove('page-header__nav-toggle-inner--closed');
    navToggleInner.classList.add('page-header__nav-toggle-inner--opened');
  } else {
    navSiteInner.classList.add('main-nav-inner--closed');
    navSiteInner.classList.remove('main-nav-inner--opened');
    contactsHeaderInner.classList.add('page-header__contacts-inner--closed');
    contactsHeaderInner.classList.remove('page-header__contacts-inner--opened');
    navToggleInner.classList.add('page-header__nav-toggle-inner--closed');
    navToggleInner.classList.remove('page-header__nav-toggle-inner--opened');
  }
});
