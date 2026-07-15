import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-signup',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCheckboxModule,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
  providers: [provideNativeDateAdapter()],
})
export class Signup {
  private _fb = inject(FormBuilder);

  signupForm: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    dateOfBirth: [null, [Validators.required]],
    terms: [true, [Validators.requiredTrue]],
  });

  get email() {
    return this.signupForm.get('email');
  }

  get emailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Email is required';
    }
    if (this.email?.hasError('email')) {
      return 'Please enter a valid email';
    }
    return '';
  }

  get password() {
    return this.signupForm.get('password');
  }

  get passwordErrorMessage() {
    if (this.password?.hasError('required')) {
      return 'Password is required';
    }
    if (this.password?.hasError('minlength')) {
      return 'Password should be at least 6 characters';
    }
    return '';
  }

  get dateOfBirth() {
    return this.signupForm.get('dateOfBirth');
  }

  get dateOfBirthErrorMessage() {
    if (this.dateOfBirth?.hasError('required')) {
      return 'Date of Birth is required';
    }
    return '';
  }

  get terms() {
    return this.signupForm.get('terms');
  }

  get termsErrorMessage() {
    if (this.terms?.hasError('required')) {
      return 'You must agree to the terms and conditions';
    }
    return '';
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log('Form is invalid');
      this.signupForm.markAllAsTouched();
    }
  }
}
