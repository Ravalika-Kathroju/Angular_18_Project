import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  products = [
    { id: 1, name: 'Espresso', description: 'Rich and bold espresso shot', price: 150, image: 'path/to/espresso.jpg' },
    { id: 2, name: 'Americano', description: 'Espresso with hot water', price: 180, image: 'path/to/americano.jpg' },
    { id: 3, name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 200, image: 'path/to/americano.jpg' },
    { id: 4, name: 'Latte', description: 'Espresso with steamed milk', price: 220, image: 'path/to/americano.jpg' },
    { id: 5, name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: 250, image: 'path/to/americano.jpg' },
    { id: 6, name: 'Macchiato', description: 'Espresso with microfoam', price: 250, image: 'path/to/americano.jpg' },
    { id: 7, name: 'Flat White', description: 'Espresso with a dollop of steamed milk', price: 250, image: 'path/to/americano.jpg' },
    { id: 8, name: 'Affogato', description: 'Espresso poured over vanilla ice cream', price: 300, image: 'path/to/americano.jpg' }
    // Add more products here
  ];
  constructor(public cartService: CartService) {
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
  /*
  coffeeItems: CoffeeItem[] = [
    { name: 'Espresso', description: 'Rich and bold espresso shot', price: 150 },
    { name: 'Americano', description: 'Espresso with hot water', price: 180 },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 200 },
    { name: 'Latte', description: 'Espresso with steamed milk', price: 220 },
    { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: 250 },
    { name: 'Macchiato', description: 'Espresso with microfoam', price: 250 },
    { name: 'Flat White', description: 'Espresso with a dollop of steamed milk', price: 250 },
    { name: 'Affogato', description: 'Espresso poured over vanilla ice cream', price: 300 }
    // ... other coffee items
  ];

  onCoffeeSelected(coffee: CoffeeItem) {
    // Implement logic to handle coffee selection (e.g., display message, add to cart)
    console.log(`Coffee selected: ${coffee.name}`); // Example action
    alert(`You have selected ${coffee.name}`);
  }
  */
}

@NgModule({
  imports: [CommonModule] // Import CommonModule here if not using standalone components
})
export class MenuModule { }

