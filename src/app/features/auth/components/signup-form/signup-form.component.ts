import { Component, OnInit } from '@angular/core';
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
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule , MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
