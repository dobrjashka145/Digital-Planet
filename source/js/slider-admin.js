const sliders = document.querySelectorAll('.slider');
// const sliderWrapper = slider.querySelector('.slider-wrapper');
// const sliderItem = slider.querySelector('.slider-item');

for (let i = 0; i < sliders.length; i++) {
  moveSlide (sliders[i]);
}

function moveSlide (slider) {
  const sliderItems = Array.from(slider.querySelectorAll('.slider-item'));
  const buttonNext = slider.querySelector('.slider-controls__button--next');
  const buttonPrev = slider.querySelector('.slider-controls__button--prev');

  let i = 0;
  buttonNext.addEventListener('click', function() {
    sliderItems[i].classList.remove('slider-item--active');
    i = (i + 1) % sliderItems.length;
    sliderItems[i].classList.add('slider-item--active');
    console.log(i);
  });

  buttonPrev.addEventListener('click', function() {
    sliderItems[i].classList.remove('slider-item--active');
    if (i <= 0) {
      i = sliderItems.length - 1;
    } else {
      i = (i - 1);
    }
    sliderItems[i].classList.add('slider-item--active');
  });
}






