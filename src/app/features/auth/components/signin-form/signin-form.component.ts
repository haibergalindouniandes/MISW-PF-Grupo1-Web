import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../../../core/services/auth/login.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Signin } from '../../../../core/models/auth/signin';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule , MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.scss'
})
export class SigninFormComponent {

  signInForm!: FormGroup;

  email: string = '';
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private signingService: LoginService,
    private router: Router
  ) { }

  signIn(signIn: Signin) {
    let userLogin = new Signin(signIn.email, signIn.password);
    this.signingService.signIn(userLogin)
      .subscribe(signInSucess => {
        sessionStorage.setItem('username', signInSucess.name);
        this.toastr.success('Confirmation', '¡¡¡ Bienvenido ' + sessionStorage.getItem('username') + ' !!!', { closeButton: true });
        this.signInForm.reset();
        this.router.navigate(['/'])
      })
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}


