import './style.css';
import { init, products } from './src';

let htmlProductsString = '';

products.forEach(({ id, name, price, category }) => {
  htmlProductsString += `
    <div class="dessert-card">
      <h2>${name}</h2>
      <p class="dessert-price">$${price}</p>
      <p class="product-category">Category: ${category}</p>
      <button id="${id}" class="btn add-to-cart-btn">Add to cart</button>
    </div> 
  `;
});

document.querySelector<HTMLDivElement>('#dessert-card-container')!.innerHTML =
  htmlProductsString;


document.addEventListener('DOMContentLoaded', () => {
  init();
})
