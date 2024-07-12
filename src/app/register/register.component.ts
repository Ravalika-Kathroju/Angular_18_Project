import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { username: '', email: '', password: '' };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Registration successful:', response);
        // Handle success, e.g., redirect to login page
      },
      error => {
        console.error('Registration error:', error);
        // Handle error, e.g., display error message
      }
    );
  }
}

