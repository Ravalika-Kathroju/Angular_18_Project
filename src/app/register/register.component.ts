import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule, CommonModule], // Include CommonModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { username: '', email: '', password: '' };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Registration successful:', response);
        this.successMessage = 'Registration successful! Please log in.'; // Set success message
        this.errorMessage = ''; // Clear error message
        // Handle success, e.g., redirect to login page
      },
      error => {
        console.error('Registration error:', error);
        this.errorMessage = error.error.message; // Assuming your backend sends error messages in 'message' field
        this.successMessage = ''; // Clear success message
      }
    );
  }
}
