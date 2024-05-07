import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Signup } from '../../../../core/models/auth/signup';
import { SignupService } from '../../../../core/services/auth/signup.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule, SignupFormComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']

})
export class SignupFormComponent implements OnInit {

  serviceSignUpForm!: FormGroup;
  tipo_documento: string = 'CC'
  pais_nacimiento: string = 'Colombia'
  ciudad_nacimiento: string = 'Bogota'
  genero: string = 'M'
  pais_residencia: string = 'Colombia'
  ciudad_residencia: string = 'Bogota'
  ciclismo: Boolean = false
  atletismo: Boolean = false
  otros_deportes: Boolean = false
  deportes: Array<string> = []
  tipo_plan: string = 'Basico'
  tipo_usuario: string = 'Usuario'

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private SignupService: SignupService
  ) { }

  ngOnInit() {
    this.serviceSignUpForm = this.fb.group({
      inputUsuario: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9-_\.]+@([a-zA-Z0-9-_]+\.)+[a-zA-Z0-9-_]{2,4}$')]],
      inputContrasena: ['', [Validators.required, Validators.pattern('^(?!.* )(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,64}$')]],
      inputNombres: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{4}([( )a-zA-Z]){0,26}$')]],
      inputPeso: ['', [Validators.required, Validators.min(40), Validators.max(500), Validators.pattern('^(?=.*?[0-9])[0-9]*[.]?[0-9]*$')]],
      inputApellidos: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{4}([( )a-zA-Z]){0,26}$')]],
      inputEdad: ['', [Validators.required, Validators.min(18), Validators.max(90), Validators.pattern('^([0-9]+)$')]],
      inputAltura: ['', [Validators.required, Validators.min(130), Validators.max(230), Validators.pattern('^(?=.*?[0-9])[0-9]*[.]?[0-9]*$')]],
      inputNumDoc: ['', [Validators.required, Validators.pattern('^([0-9]{8})$')]],
      inputAntiguedad: ['', [Validators.required, Validators.min(1), Validators.max(900), Validators.pattern('^([0-9]+)$')]],
      inputContactosEmergencia: ['', [Validators.min(10), Validators.max(900), Validators.pattern(/^(([^,]+@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+)(\s*,)*){1,}$/)]]
    });

  }

  checkboxCiclismoCambio(event:Event):void {
    this.ciclismo = (event.target as HTMLInputElement).checked;
  }

  checkboxAtletismoCambio(event:Event):void {
    this.atletismo = (event.target as HTMLInputElement).checked;
  }

  checkboxOtrosCambio(event:Event):void {
    this.otros_deportes = (event.target as HTMLInputElement).checked;
  }

  get_tipo_documento(event:Event):void {
    this.tipo_documento = (event.target as HTMLInputElement).value
  }

  get_pais_nacimiento(event:Event):void {
    this.pais_nacimiento = (event.target as HTMLInputElement).value
  }

  get_ciudad_nacimiento(event:Event):void {
    this.ciudad_nacimiento = (event.target as HTMLInputElement).value
  }

  get_genero(event:Event):void {
    this.genero = (event.target as HTMLInputElement).value
  }

  get_pais_residencia(event:Event):void {
    this.pais_residencia = (event.target as HTMLInputElement).value
  }

  get_ciudad_residencia(event:Event):void {
    this.ciudad_residencia = (event.target as HTMLInputElement).value
  }

  get_tipo_plan(event:Event):void {
    this.tipo_plan = (event.target as HTMLInputElement).value
    if (this.tipo_plan=='No Aplica'){
      this.tipo_usuario = 'Proveedor'
    }
    else {
      this.tipo_usuario = 'Usuario'
    }
  }

  enableEmergencyContacts():boolean {
    if (this.tipo_plan=='Premium'){
      return true;
    }
    else {
      return false;
    }
  }

  get_tipo_usuario(event:Event):void {
    this.tipo_usuario = (event.target as HTMLInputElement).value
    if (this.tipo_usuario=='Proveedor'){
      this.tipo_plan = 'No Aplica'
    }
    else {
      this.tipo_plan = 'Basico'
    }
  }

  get_deportes():Array<string> {
    this.deportes = []
    if (this.ciclismo == true) {
      this.deportes.push('Ciclismo')
    }
    if (this.atletismo == true) {
      this.deportes.push('Atletismo')
    }
    if (this.otros_deportes == true) {
      this.deportes.push('Otros')
    }
    return this.deportes
  }

  convertStringToArray(string: string): string[] {
    if (!string || string.trim() === '') {
      return [];
    }
    return string.split(',');
  }

  createUser() {
    if (this.serviceSignUpForm.valid) {
      let data = this.serviceSignUpForm.value;
      let deportes = this.get_deportes()
      let signupService = new Signup(
        data.inputUsuario,
        data.inputContrasena,
        data.inputNombres,
        parseFloat(data.inputPeso),
        data.inputApellidos,
        parseInt(data.inputEdad),
        this.tipo_documento,
        parseFloat(data.inputAltura),
        data.inputNumDoc,
        this.pais_nacimiento,
        this.ciudad_nacimiento,
        this.genero,
        this.pais_residencia,
        this.ciudad_residencia,
        deportes,
        parseInt(data.inputAntiguedad),
        this.tipo_plan,
        this.tipo_usuario,
        this.convertStringToArray(data.inputContactosEmergencia)
      );
      /* istanbul ignore next */
      this.SignupService.signUp(signupService)
      .subscribe(createUserSucess => {
        this.toastr.success('Confirmación', 'Se creo usuario exitosamente!', { closeButton: true });
        this.serviceSignUpForm.reset();
        this.reset_checkboxes(false, false, false)
      })
    }
  }

  cancel() {
    this.serviceSignUpForm.reset();
  }

  reset_checkboxes(ciclismo:boolean, atletismo:boolean, otros_deportes:boolean){
    this.ciclismo = ciclismo;
    this.atletismo = atletismo;
    this.otros_deportes = otros_deportes
  }

}
