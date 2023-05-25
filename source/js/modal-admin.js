const orderButtons = document.querySelectorAll('[class*="__booking"]');
const orderCard = document.querySelector('.order-card-container');
const orderCardToggle = document.querySelector('.order-card__toggle');

const orderConfirm = document.querySelector('.order-confirm-container');
const orderConfirmToggle = document.querySelector('.order-confirm__toggle');
const orderConfirmOK = document.querySelector('.order-confirm__button');

const orderForm = document.querySelector('.order-form');
const orderName = orderForm.querySelector('input[name="order-name"]');
const orderTel = orderForm.querySelector('input[name="order-tel"]');
const orderSubmit = document.querySelector('.order-form__submit');

for (let i = 0; i < orderButtons.length; i++) {
  orderButtons[i].addEventListener('click', function(event) {
    event.preventDefault();
    if(orderCard.classList.contains('modal-opened')) {
      orderCard.classList.remove('modal-opened');
    } else {
      orderCard.classList.add('modal-opened');
      orderName.value = '';
      orderTel.value = '';
    }
  });
}

orderSubmit.addEventListener('click', function() {
  if(orderConfirm.classList.contains('modal-opened')) {
    orderConfirm.classList.remove('modal-opened')
  } else {
    orderConfirm.classList.add('modal-opened');
    orderCard.classList.remove('modal-opened');
  }
});

orderCardToggle.addEventListener('click', function() {
  orderCard.classList.remove('modal-opened');
});

orderConfirmToggle.addEventListener('click', function() {
  orderConfirm.classList.remove('modal-opened');
});

orderConfirmOK.addEventListener('click', function() {
  orderConfirm.classList.remove('modal-opened');
});
