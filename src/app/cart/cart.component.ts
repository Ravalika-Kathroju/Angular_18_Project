import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = this.cartService.getCartItems();
  totalAmount = this.cartService.getTotalAmount();

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.updateCart();
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.updateCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.updateCart();
  }

  updateCart() {
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartService.getTotalAmount();
  }
}