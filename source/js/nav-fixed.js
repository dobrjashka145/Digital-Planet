let navbar = document.querySelector('.page-header');

window.addEventListener('scroll', function() {
  if(scrollY > 567) {
    navbar.classList.add('page-header--fixed');
  }
  else {
    navbar.classList.remove('page-header--fixed');
  }
});