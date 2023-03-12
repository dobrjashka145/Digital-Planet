const Sliders = document.querySelectorAll('.slider');

for (let slider of Sliders) {
  slider.classList.remove('slider--nojs');
}

for (let i = 0; i < Sliders.length; i++) {
  moveSlide (Sliders[i]);
}

function moveSlide (slider) {
  const sliderItems = slider.querySelectorAll('.slider__item');
  const buttonNext = slider.querySelector('.slider-controls__button--next');
  const buttonPrev = slider.querySelector('.slider-controls__button--prev');
  const counterTotal = slider.querySelector('.slider-controls__counter-total');
  const counterCurrent = slider.querySelector('.slider-controls__counter-current');

  counterTotal.textContent = '0' + sliderItems.length;

  let i = 0;
  buttonNext.addEventListener('click', function() {
    sliderItems[i].classList.remove('slider__item--active');
    i = (i + 1) % sliderItems.length; // Обнуление i при i=sliderItems.length, т.к. остаток от деления =0
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






