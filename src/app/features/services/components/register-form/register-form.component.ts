import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../../../../core/models/services/register';
import { CommandsService } from "../../../../core/services/services/commands.service";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent implements OnInit {

  serviceRegistrationForm!: FormGroup;
  dateValue = this.getFormattedDate();
  timeValue = '06:00';

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private commandsService: CommandsService,
  ) { }

  ngOnInit() {
    this.serviceRegistrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(12)]],
      frequency: ['', [Validators.required, Validators.minLength(6)]],
      cost: ['', [Validators.required, Validators.minLength(8)]],
      minimum_number_participants: ['', [Validators.required, Validators.minLength(1)]],
      maximum_number_participants: ['', [Validators.required, Validators.minLength(1)]],
      place: ['', [Validators.required, Validators.minLength(8)]],
      date: ['', [Validators.required, this.dateValidator]],
      time: ['', [Validators.required]],
    });
    this.setDateTimeDefaultValues();
  }

  registerService() {
    if (this.serviceRegistrationForm.valid) {
      let data = this.serviceRegistrationForm.value;
      let registerService = new Register(
        data.name,
        data.description,
        data.frequency,
        data.cost,
        parseInt(data.minimum_number_participants),
        parseInt(data.maximum_number_participants),
        data.place,
        data.date + ' ' + data.time + ':00',
        sessionStorage.getItem('user_id')!
      );

      this.commandsService.registerService(registerService)
      .subscribe(registerSucess => {
        this.toastr.success('Confirmation', 'Se registro servicio exitosamente!', { closeButton: true });
        this.serviceRegistrationForm.reset();
        console.log(registerSucess);
      })
    }
  }

  getFormattedDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  dateValidator(control: FormControl): { [key: string]: boolean } | null {
    const selectedDate = control.value;
    if (selectedDate) {
      const parsedDate = new Date(selectedDate);
      const today = new Date();
      if (parsedDate < today) {
        return { pastDate: true };
      }
    }
    return null;
  }

  setDateTimeDefaultValues() {
    this.serviceRegistrationForm.get('date')?.setValue(this.getFormattedDate());
    this.serviceRegistrationForm.get('time')?.setValue('06:00');
  }

  cancel() {
    this.serviceRegistrationForm.reset();
    this.setDateTimeDefaultValues();
  }


}
