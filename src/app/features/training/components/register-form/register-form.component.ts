import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RegisterTrainingPlanService } from '../../../../core/services/training/register-training-plan.service';
import { GetTrainingPlanService } from '../../../../core/services/training/get-training-plan.service';
import { switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TrainingPlan } from '../../../../core/models/training/training-plan';


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  trainingPlan_original_values: any;
  trainingPlan: any = {};
  editMode: boolean = false;
  tipo_entrenamiento: string = 'Ciclismo';
  @ViewChild('distanceInput') distance1Input?: ElementRef;

  constructor(
    public toastr: ToastrService,
    private serviceRegisterTrainingPlan: RegisterTrainingPlanService,
    private serviceGetTrainingPlan: GetTrainingPlanService
  ) { }

  ngOnInit() {
    this.getTrainingPlanByUser();

  }

  toggleEdit() {
    if (!this.editMode) {
      this.editMode = true;
      this.trainingPlan_original_values = { ...this.trainingPlan };
      this.distance1Input?.nativeElement.focus();
    }
    else {
      /* istanbul ignore next */
      if (this.validateIfAllowRegister()) {
        // Registro de valores de plan de entrenamiento
        let newTrainingPlan = new TrainingPlan(
          this.tipo_entrenamiento,
          sessionStorage.getItem('user_id')!,
          this.trainingPlan.numero_semanas,
          this.convert_number_to_string()
        );
        // console.log(newTrainingPlan)
        this.serviceRegisterTrainingPlan.registerTrainingPlan(newTrainingPlan)
          .subscribe(registerSuccess => {
            this.toastr.success('Confirmación', 'Se registro plan de entrenamiento exitosamente!', { closeButton: true });
            this.getTrainingPlanByUser();
          });
        this.trainingPlan_original_values = { ...this.trainingPlan };
        this.editMode = false;
      }
    }
  }

  getTrainingPlanByUser() {
    this.trainingPlan = {};
    /* istanbul ignore next */
    this.serviceGetTrainingPlan.getTrainingPlanByUser(sessionStorage.getItem('user_id')!)
      .pipe(
        switchMap(getTrainingPlanSuccess => {
          this.toastr.success('Confirmación', 'Consulta de información exitosa!', { closeButton: true });
          this.trainingPlan = getTrainingPlanSuccess;
          this.trainingPlan_original_values = { ...this.trainingPlan };
          this.tipo_entrenamiento = this.trainingPlan.entrenamiento;
          return [];
        })
      )
      .subscribe(() => { });
  }

  validateIfAllowRegister() {
    if (this.trainingPlan && 'plan_entrenamiento' in this.trainingPlan &&
      'lunes' in this.trainingPlan.plan_entrenamiento &&
      'martes' in this.trainingPlan.plan_entrenamiento &&
      'miercoles' in this.trainingPlan.plan_entrenamiento &&
      'jueves' in this.trainingPlan.plan_entrenamiento &&
      'viernes' in this.trainingPlan.plan_entrenamiento &&
      'sabado' in this.trainingPlan.plan_entrenamiento &&
      'domingo' in this.trainingPlan.plan_entrenamiento &&
      'numero_semanas' in this.trainingPlan) {
        return true;
    }
    return false;
  }

  get_tipo_entrenamiento(event:Event):void {
    this.tipo_entrenamiento = (event.target as HTMLInputElement).value
  }

  convert_number_to_string(): any {
    let plan_entrenamientoString = '';
    plan_entrenamientoString = JSON.stringify(this.trainingPlan.plan_entrenamiento, (key, value) => {
      // Convertir el valor a string si no es una cadena
      if (typeof value === 'number') {
        return value.toString();
      }
      return value;
    });
    return JSON.parse(plan_entrenamientoString);
  }

  cancel() {
    this.trainingPlan = { ...this.trainingPlan_original_values };
    this.editMode = false;
  }

}


