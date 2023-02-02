let navbar = document.getElementById('inner');

window.addEventListener ('scroll', function() {
  if(scrollY > 568) {
    navbar.classList.add('page-header--fixed');
  }
  else {
    navbar.classList.remove('page-header--fixed');
  }
});
