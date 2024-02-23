import { $cartSubTotal, $cartTaxes, $cartTotal, $productsContainer, $totalNumberOfItems } from '..';
import { CountPerProduct, Product } from '../interfaces';

export class ShoppingCart {

  public items: any[];
  public total: number;
  readonly taxRate: number;

  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  //
  public addItem(id: number, products: Product[]) {

    const product = products.find((item) => item.id === id);

    if (product) {

      const { name, price } = product;

      this.items.push(product);
      const totalCountPerProduct: CountPerProduct = {};

      this.items.forEach((dessert) => {
        totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
      });

      const currentProductCount = totalCountPerProduct[product.id];
      const currentProductCountSpan = document.getElementById(
        `product-count-for-id${product.id}`
      )!;

      currentProductCount > 1
        ? (currentProductCountSpan.textContent = `${currentProductCount}x`)
        : ($productsContainer.innerHTML += `
        <div class="product" id="dessert${id}">
          <p>
            <span class="product-count" id="product-count-for-id${id}">
              ${name}
            </span>
          </p>
          <p>${price}</p>
        </div>
      `);
    }
  }

  //
  public getCounts(){
    return this.items.length
  }

  //
  calculateTotal(): number{
    const subTotal = this.items.reduce((total, item)=> total + item.price, 0)
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    $cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    $cartTaxes.textContent = `$${tax.toFixed(2)}`
    $cartTotal.textContent = `$${this.total.toFixed(2)}`

    return this.total;
  }

  //
  calculateTaxes(amount: number){
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  //
  clearCart(){

    if(!this.items.length){
      alert('Your shopping cart is already empty');
      return;
    }

    const isCartCleared = confirm("Are you sure you want to clear all items from your shopping cart?");

    if(isCartCleared){
      this.items = []
      this.total = 0;
      $productsContainer.innerHTML = "";
      $totalNumberOfItems.textContent = `${0}`; 
      $cartSubTotal.textContent = `${0}`; 
      $cartTaxes.textContent = `${0}`; 
      $cartTotal.textContent = `${0}`; 
    }
  }
}


