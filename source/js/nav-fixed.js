window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.page-header');

  if(scrollY > 0) {
    navbar.classList.add('page-header--fixed');
  }
  else {
    navbar.classList.remove('page-header--fixed');
  }
});
