import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../../../core/services/auth/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Signin } from '../../../../core/models/auth/signin';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
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
    sessionStorage.clear();
    let userLogin = new Signin(signIn.email, signIn.password);
    /* istanbul ignore next */
    this.signingService.signIn(userLogin)
      .subscribe(signInSuccess => {
        sessionStorage.setItem('username', signInSuccess.nombres);
        sessionStorage.setItem('user_id', signInSuccess.id.toString());
        sessionStorage.setItem('email', userLogin.email);
        sessionStorage.setItem('rol', signInSuccess.tipo_usuario);
        sessionStorage.setItem('token', signInSuccess.token);
        this.toastr.success('Confirmación', '¡¡¡ Bienvenido ' + sessionStorage.getItem('username') + ' !!!', { closeButton: true });
        this.signInForm.reset();
        if(signInSuccess.tipo_usuario == 'Usuario'){
          this.router.navigate(['/home'])
        }else{
          this.router.navigate(['/homeproveedores'])
        }

      })
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.pattern("^(?!.* )(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,64}$")]]
    });
  }
}
