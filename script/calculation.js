document.addEventListener('DOMContentLoaded', function() {
  const minusBtns = document.querySelectorAll('.minus-btn');
  const plusBtns = document.querySelectorAll('.plus-btn');
  const quantityInputs = document.querySelectorAll('.quantity-input');

  if (minusBtns.length !== plusBtns.length || plusBtns.length !== quantityInputs.length) {
    console.warn('Warning: counts of buttons and inputs do not match.');
  }

  const count = Math.min(minusBtns.length, plusBtns.length, quantityInputs.length);

  for (let i = 0; i < count; i++) {
    const minusBtn = minusBtns[i];
    const plusBtn = plusBtns[i];
    const quantityInput = quantityInputs[i];

    minusBtn.addEventListener('click', () => {
      let value = parseInt(quantityInput.value);
      if (isNaN(value) || value <= 1) {
        quantityInput.value = 1;
      } else {
        quantityInput.value = value - 1;
      }
    });

    plusBtn.addEventListener('click', () => {
      let value = parseInt(quantityInput.value);
      if (isNaN(value) || value < 1) {
        quantityInput.value = 1;
      } else {
        quantityInput.value = value + 1;
      }
    });

    quantityInput.addEventListener('input', () => {
      let value = parseInt(quantityInput.value);
      if (isNaN(value) || value < 1) {
        quantityInput.value = 1;
      } else {
        quantityInput.value = value;
      }
    });
  }
});

