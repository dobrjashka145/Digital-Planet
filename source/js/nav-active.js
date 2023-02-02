var navLink = document.getElementsByClassName('main-nav__item');

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function() {

    var current = document.getElementsByClassName('main-nav__item--active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' main-nav__item--active', '');
    }

    this.className += ' main-nav__item--active';
  });
}
