import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule, SignupFormComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']

})
export class SignupFormComponent implements OnInit {

  SignUpForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
    this.SignUpForm = this.fb.group({
      inputUsuario: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9-_\.]+@([a-zA-Z0-9-_]+\.)+[a-zA-Z0-9-_]{2,4}$')]],
      inputContrasena: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9-_]{8,})$')]],
      inputNombres: ['', [Validators.required, Validators.minLength(4)]],
      inputPeso: ['', [Validators.required, Validators.min(40), Validators.max(500), Validators.pattern('^([0-9]+)$')]],
      inputApellidos: ['', [Validators.required, Validators.minLength(4)]],
      inputEdad: ['', [Validators.required, Validators.min(18), Validators.max(90), Validators.pattern('^([0-9]+)$')]],
      inputAltura: ['', [Validators.required, Validators.min(130), Validators.max(230), Validators.pattern('^([0-9]+)$')]],
      inputNumDoc: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9]{8})$')]],
      inputAntiguedad: ['', [Validators.required, Validators.min(1), Validators.max(900), Validators.pattern('^([0-9]+)$')]]
    });

  }



  cancel() {
    this.SignUpForm.reset();
  }


}
