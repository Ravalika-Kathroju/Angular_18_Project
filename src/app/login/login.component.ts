import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule, CommonModule], // Include CommonModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      response => {
        console.log('Login successful:', response);
        this.successMessage = 'Login successful! Redirecting...'; // Set success message
        this.errorMessage = ''; // Clear error message
        // Handle further actions like redirection
      },
      error => {
        console.error('Login error:', error);
        this.errorMessage = error.error.message; // Set error message
        this.successMessage = ''; // Clear success message
      }
    );
  }
}
