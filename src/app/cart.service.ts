import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.saveCart();
  }

  removeFromCart(product: any) {
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index > -1) {
      this.cart[index].quantity -= 1;
      if (this.cart[index].quantity === 0) {
        this.cart.splice(index, 1);
      }
      this.saveCart();
    }
  }

  getCartItems() {
    this.loadCart();
    return this.cart;
  }

  getTotalAmount() {
    return this.cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCart() {
    const cart = localStorage.getItem('cart');
    this.cart = cart ? JSON.parse(cart) : [];
  }
}
