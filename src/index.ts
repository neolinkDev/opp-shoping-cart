
import { ShoppingCart } from './classes/ShoppingCart';
import { Product } from './interfaces';

const $cartContainer = document.getElementById('cart-container') as HTMLDivElement;
export const $productsContainer = document.getElementById('products-container')!;

const $clearCartBtn = document.getElementById('clear-cart-btn')!;

export const $totalNumberOfItems = document.getElementById('total-items')!;
export const $cartSubTotal = document.getElementById('subtotal')!;
export const $cartTaxes = document.getElementById('taxes')!;
export const $cartTotal = document.getElementById('total')!;

const $showHideCartSpan = document.getElementById('show-hide-cart')!;

let isCartShowing = false;

export const products: Product[] = [
  {
    id: 1,
    name: 'Vanilla Cupcakes (6 Pack)',
    price: 12.99,
    category: 'Cupcake',
  },
  { id: 2, name: 'French Macaroon', price: 3.99, category: 'Macaroon' },
  { id: 3, name: 'Pumpkin Cupcake', price: 3.99, category: 'Cupcake' },
  { id: 4, name: 'Chocolate Cupcake', price: 5.99, category: 'Cupcake' },
  {
    id: 5,
    name: 'Chocolate Pretzels (4 Pack)',
    price: 10.99,
    category: 'Pretzel',
  },
  { id: 6, name: 'Strawberry Ice Cream', price: 2.99, category: 'Ice Cream' },
  {
    id: 7,
    name: 'Chocolate Macaroons (4 Pack)',
    price: 9.99,
    category: 'Macaroon',
  },
  { id: 8, name: 'Strawberry Pretzel', price: 4.99, category: 'Pretzel' },
  { id: 9, name: 'Butter Pecan Ice Cream', price: 2.99, category: 'Ice Cream' },
  { id: 10, name: 'Rocky Road Ice Cream', price: 2.99, category: 'Ice Cream' },
  {
    id: 11,
    name: 'Vanilla Macaroons (5 Pack)',
    price: 11.99,
    category: 'Macaroon',
  },
  {
    id: 12,
    name: 'Lemon Cupcakes (4 Pack)',
    price: 12.99,
    category: 'Cupcake',
  },
];

export const init = (): void => {
  // instance
  const cart = new ShoppingCart();
  
  const addToCartBtns = document.getElementsByClassName('add-to-cart-btn');
  
  [...addToCartBtns].forEach((btn) => {
    btn.addEventListener('click', (e) => {
  
      const target = e.target as HTMLElement;
      
      cart.addItem(Number(target.id), products);
      $totalNumberOfItems.textContent = `${cart.getCounts()}`; 
      cart.calculateTotal();
    })
  })
  
  document.addEventListener('click', (e) => {

    const target = e.target as HTMLElement;
    
    if(target.closest('#cart-btn')){
      isCartShowing = !isCartShowing 
      $showHideCartSpan.textContent = isCartShowing ? 'Hide' : 'Show';
      $cartContainer.style.display = isCartShowing ? 'block' : 'none';
    }

    if(target === $clearCartBtn){
      cart.clearCart()
    }
    
  })

}