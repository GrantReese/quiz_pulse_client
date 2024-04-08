import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {signupForm = new FormGroup({
  email: new FormControl('', Validators.required),
  first_name: new FormControl('', Validators.required),
  last_name: new FormControl('', Validators.required),
  location: new FormControl('', Validators.required),
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
  password_confirmation: new FormControl('', Validators.required),
});

}
