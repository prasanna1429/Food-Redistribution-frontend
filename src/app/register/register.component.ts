import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule]
})
export class RegisterComponent {

  registerForm!: FormGroup;
  submitted = false;

  // Password visibility toggles
  showPassword = false;
  showConfirm = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
  }

  // Shorthand getter for cleaner template access
  get f() {
    return this.registerForm.controls;
  }

  // Cross-field validator: passwords must match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Form submission
  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const payload = {
      fullName: this.registerForm.value.fullName,
      email: this.registerForm.value.email,
      phone: this.registerForm.value.phone,
      role: this.registerForm.value.role,
      password: this.registerForm.value.password
    };

    alert('Registration successful');
    console.log('Registration successful', payload);

    // Uncomment and replace with your actual API call:
    // this.authService.register(payload).subscribe({
    //   next: () => this.router.navigate(['/dashboard']),
    //   error: (err) => console.error('Registration failed', err)
    // });
  }
  loginWithGoogle() {
    // Implement Google login logic here
    console.log('Google login clicked');
  }
  loginWithFacebook() {
    // Implement Facebook login logic here
    console.log('Facebook login clicked');
  }
}