// ITERATION 1
// V - 01 - NORMAL
function updateSubtotal(product) {
  // Nos traemos elementos del DOM [price & quantity]
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // Extraer el valor del input :)
  const priceValue = parseFloat(price.innerHtml)
  const quantityValue = quantity.valueAsNumber;

  // Calcular estos valores
  const subtotalValue = priceValue * quantityValue;

  // Obtener elemento del DOM === subtotal
  const subTotal = product.querySelector('.subtotal span');

  // Settiar la variable subTotal con un poquito de texto que equivale a la variable de subtotalvalue
  subTotal.innerText = subtotalValue;

  // Return Subtotal value para poder usarlo correctamente en la funcion y poder reusarlo en nuestro codigo
  return subtotalValue;x
}


// V - 02 - ARROW
// const updateSubtotalArrow = () => {
//   // Nos traemos elementos del DOM [price & quantity]
//   const price = product.querySelector('.price span');
//   const quantity = product.querySelector('.quantity input');

//   // Extraer el valor del input :)
//   const priceValue = parseFloat(price.innerText);
//   const quantityValue = quantity.valueAsNumber;

//   // Calcular estos valores
//   const subtotalValue = priceValue * quantityValue;

//   // Obtener elemento del DOM === subtotal
//   const subTotal = product.querySelector('.subtotal span');

//   // Settiar la variable subTotal con un poquito de texto que equivale a la variable de subtotalvalue
//   subTotal.innerText = subtotalValue;

//   // Return Subtotal value para poder usarlo correctamente en la funcion y poder reusarlo en nuestro codigo
//   return subtotalValue;
// };

// V 001 - NORMAL
function calculateAll() {
  // Agarrar los elementos del DOM por CADA row
  const products = document.getElementsByClassName('product');

  // Declarar variable que vamos a usar para guardar el valor de cada iteracion de los productos. Esta var inicialmente === 0
  let totalValue = 0;

  // Iterar en base a cada elemento/producto y dentro del body de este bucle vamos a actualizar el valor de la variable totalValue y vamos a usar la funcion updateSubtotal para poder hacer el calculo :)
  for (let product of products) {
    totalValue += updateSubtotal(product);
  }

  // Darle display a el valor de este calculo iterado en el html, entonces apuntamos al elemento del dom que contiene ese TOTAL
  document.querySelector('#total-value span').innerText = totalValue;
}
// V2 - ARROW
const calculateAllArrow = () => {
  // Agarrar los elementos del DOM por CADA row
  const products = document.getElementsByClassName('product');

  // Declarar variable que vamos a usar para guardar el valor de cada iteracion de los productos. Esta var inicialmente === 0
  let totalValue = 0;

  // Iterar en base a cada elemento/producto y dentro del body de este bucle vamos a actualizar el valor de la variable totalValue y vamos a usar la funcion updateSubtotal para poder hacer el calculo :)
  for (let product of products) {
    totalValue += updateSubtotal(product);
  }

  // Darle display a el valor de este calculo iterado en el html, entonces apuntamos al elemento del dom que contiene ese TOTAL
  document.querySelector('#total-value span').innerText = totalValue;
};
// ------------
// ------------
// ------------
// ------------
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // Verifciar que esta conectada la funcion post creacion del eventListener dentro del Window object
  console.log('The target in remove is:', target);

  // Usamos el parentNode para apuntar al ABUELO de row que contiene el evento especifico que estamos apuntando casualmente el abuelo de este evento es el elemento TR con la clase product.
  const row = target.parentNode.parentNode;
  console.log(row);

  // Usamos el parentNode en la variable row para aprovechar los selectores de manioluacion del DOM para eliminar el hijo de parent.
  const parent = row.parentNode;
  console.log(parent);

  // llamamos a parent con el metodo removeChild y le pasamos la variable row dentro del metodo.
  parent.removeChild(row);

  // calculateAll() - vuelve a calcular los numeros para tener un resultado correcto una vez borremos el producto.
  calculateAll();
}

// ITERATION 5

function createProduct() {
  // Parte 1
  const createRow = document.querySelector('.create-product');
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  // Parte 2
  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
        <td class="name">
        <span>${newProdNameValue}</span>
      </td>
      <td class="price">$<span>${newProdPriceValue}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `;

  // Parte 3
  // Agarrr el padre de los rows mediante un poco de DOM
  const parent = document.querySelector('#cart tbody');

  // Adjuntar la variable newTableRow dentro de parent :)
  parent.appendChild(newTableRow);

  // Recibir logica de botones
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // Limpiar los inputs una vez el usaurio haya creado un producto
  newProdNameInput.value = '';
  newProdPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // DOM para borrar productos
  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }

  // DOM para crear productos
  const createBtn = document.querySelector('#create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});
