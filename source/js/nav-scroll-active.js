window.addEventListener('scroll', function() {
	const scrollDistance = window.scrollY;
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.main-nav__item');
  const navbar = document.querySelector('.page-header');

		sections.forEach(function(section, i) {
			if (section.offsetTop - navbar.clientHeight <= scrollDistance) {
				navLinks.forEach(function(item) {
					if (item.classList.contains('main-nav__item--active')) {
						item.classList.remove('main-nav__item--active');
					}
				});

				navLinks[i].classList.add('main-nav__item--active');
			}
		});
	}
);

