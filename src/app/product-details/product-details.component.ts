import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductComponent {
  @Input() product: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    // Fetch product details from backend using productId
    this.product = this.getProductById(productId);
  }
  getProductById(id: any) {
    // This is a placeholder. You should replace this with actual data fetching logic.
    const products = [
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
    return products.find(product => product.id == id);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    alert(`${this.product.name} added to cart!`);
  }
}
