// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const price = priceElement.innerText;
  const quantity = quantityElement.value;

  const subtotalElement = product.querySelector('.subtotal span');
  const subtotal = price * quantity;
  subtotal= subtotalElement.innerText;

  return subtotal;

console.log (updateSubtotal())

  function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  // end of test

  // ITERATION 2
  const multipleProducts = document.querySelectorAll('.product');
  let total = 0;
  for (let product of multipleProducts) {
    total += updateSubtotal(product);
  }
}

  // ITERATION 3
  //... your code goes here
}  const totalPriceElement = document.querySelector('#total-value span');
totalPriceElement.innerText = total;

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productElement = target.parentElement.parentElement;
  const tableBodyElement = productElement.parentElement;
  tableBodyElement.removeChild(productElement);

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
