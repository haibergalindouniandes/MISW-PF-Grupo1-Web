import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../../../../core/models/services/register';
import { CommandsService } from "../../../../core/services/services/commands.service";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {

  serviceRegistrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private commandsService: CommandsService,
  ) { }

  ngOnInit() {
    this.serviceRegistrationForm = this.fb.group({
      rut: ['', [Validators.required, Validators.minLength(10)]],
      service: ['', [Validators.required, Validators.minLength(12)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      license: ['', [Validators.required, Validators.minLength(8)]],
      experience: ['', [Validators.required, Validators.minLength(0)]],
      recommendation: [''],
    });
  }

  registerService() {
    if (this.serviceRegistrationForm.valid) {
      let data = this.serviceRegistrationForm.value;
      console.log(data);
      let registerService = new Register(
        data.rut,
        data.service,
        data.description,
        data.license,
        parseInt(data.experience),
        data.recommendation ?? "",
        sessionStorage.getItem('user_id')!
      );
      console.log(registerService);

      this.commandsService.registerService(registerService)
      .subscribe(registerSucess => {
        this.toastr.success('Confirmation', 'Se registro servicio exitosamente!', { closeButton: true });
        this.serviceRegistrationForm.reset();
        console.log(registerSucess);
      })
    }
  }
}
