const orderButtons = document.querySelectorAll('[name="order"]');
const orderCard = document.querySelector('.order-card-container');
const orderConfirm = document.querySelector('.order-confirm-container');
const orderSubmit = document.querySelector('.order-form__submit');
const orderCardToggle = document.querySelector('.order-card__toggle');
const orderConfirmToggle = document.querySelector('.order-confirm__toggle');
const orderConfirmOK = document.querySelector('.order-confirm__button');

for (let i = 0; i < orderButtons.length; i++) {
  orderButtons[i].addEventListener('click', function() {
    if(orderCard.classList.contains('modal-closed')) {
      orderCard.classList.remove('modal-closed');
    }
  });
}

orderSubmit.addEventListener('click', function() {
  if(orderConfirm.classList.contains('modal-closed')) {
    orderConfirm.classList.remove('modal-closed');
    orderCard.classList.add('modal-closed');
  }
});

orderCardToggle.addEventListener('click', function() {
  orderCard.classList.add('modal-closed');
});

orderConfirmToggle.addEventListener('click', function() {
  orderConfirm.classList.add('modal-closed');
});

orderConfirmOK.addEventListener('click', function() {
  orderConfirm.classList.add('modal-closed');
});


