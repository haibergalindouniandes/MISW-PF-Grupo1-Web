import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../../../../core/models/services/register';
import { RegisterService } from "../../../../core/services/services/register.service";

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
  timeStart: string = '06:00:00';
  timeEnd: string = '06:00:00';
  rangeHours: string[] = [];

  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    private RegisterService: RegisterService,
  ) { }

  ngOnInit() {
    this.serviceRegistrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(12)]],
      frequency: ['', [Validators.required, Validators.minLength(4)]],
      cost: ['', [Validators.required, Validators.minLength(8)]],
      minimum_number_participants: ['', [Validators.required, Validators.minLength(1)]],
      maximum_number_participants: ['', [Validators.required, Validators.minLength(1)]],
      place: ['', [Validators.required, Validators.minLength(6)]],
      date: ['', [Validators.required, this.dateValidator]],
      timeStart: ['', [Validators.required]],
      timeEnd: ['', [Validators.required, this.timeValidation]],
    }, { validator: this.timeValidation });
    this.setDateTimeDefaultValues();
  }

  registerService() {
    if (this.serviceRegistrationForm.valid) {
      this.generateRangeHours();
      let data = this.serviceRegistrationForm.value;
      let registerService = new Register(
        data.name,
        data.description,
        data.frequency,
        data.cost,
        parseInt(data.minimum_number_participants),
        parseInt(data.maximum_number_participants),
        data.place,
        data.date,
        sessionStorage.getItem('user_id')!,
        this.rangeHours
      );
      /* istanbul ignore next */
      this.RegisterService.registerService(registerService)
        .subscribe(registerSucess => {
          this.toastr.success('Confirmation', 'Se registro servicio exitosamente!', { closeButton: true });
          this.serviceRegistrationForm.reset();
          console.log(registerSucess);
        })
    }
  }

  cancel() {
    this.serviceRegistrationForm.reset();
    this.setDateTimeDefaultValues();
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
    this.serviceRegistrationForm.get('timeStart')?.setValue('06:00:00');
    this.serviceRegistrationForm.get('timeEnd')?.setValue('07:00:00');
  }

  generateRangeHours() {
    this.rangeHours = [];
    const timeStart = new Date();
    timeStart.setHours(parseInt(this.timeStart.split(':')[0]), parseInt(this.timeStart.split(':')[1]), 0);
    const timeEnd = new Date();
    timeEnd.setHours(parseInt(this.timeEnd.split(':')[0]), parseInt(this.timeEnd.split(':')[1]), 0);
    while (timeStart <= timeEnd) {
      const formattedtime = timeStart.toLocaleTimeString('es-CO');
      this.rangeHours.push(formattedtime);
      timeStart.setMinutes(timeStart.getMinutes() + 60);
    }
  }

  timeValidation(group: FormGroup) {
    const timeStart = group.get('timeStart')?.value;
    const timeEnd = group.get('timeEnd')?.value;
    if (timeStart && timeEnd) {
      if (timeStart <= timeEnd) {
        group.get('timeEnd')?.setErrors(null);
      } else {
        group.get('timeEnd')?.setErrors({ invalidRange: true });
      }
    }
  }

}
