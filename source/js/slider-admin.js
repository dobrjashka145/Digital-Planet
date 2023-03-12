const sliders = document.querySelectorAll('.slider');

for (let i = 0; i < sliders.length; i++) {
  moveSlide (sliders[i]);
}

function moveSlide (slider) {
  const sliderItems = Array.from(slider.querySelectorAll('.slider__item'));
  const buttonNext = slider.querySelector('.slider-controls__button--next');
  const buttonPrev = slider.querySelector('.slider-controls__button--prev');
  const counterTotal = slider.querySelector('.slider-controls__counter-total');
  const counterCurrent = slider.querySelector('.slider-controls__counter-current');

  counterTotal.textContent = '0' + sliderItems.length;

  let i = 0;
  buttonNext.addEventListener('click', function() {
    sliderItems[i].classList.remove('slider__item--active');
    i = (i + 1) % sliderItems.length;
    sliderItems[i].classList.add('slider__item--active');
    counterCurrent.textContent = '0' + (i + 1) + '/';
  });

  buttonPrev.addEventListener('click', function() {
    sliderItems[i].classList.remove('slider__item--active');
    if (i <= 0) {
      i = sliderItems.length - 1;
    } else {
      i = (i - 1);
    }
    sliderItems[i].classList.add('slider__item--active');
    counterCurrent.textContent = '0' + (i + 1) + '/';
  });
}






