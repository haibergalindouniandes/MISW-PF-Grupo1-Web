import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { GetFeedingPlanService } from '../../../../core/services/nutrition/get-feeding-plan.service';
import { switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FeedingPlan } from '../../../../core/models/nutrition/feeding-plan';
import { RegisterFeedingPlanService } from '../../../../core/services/nutrition/register-feeding-plan.service';


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  feedingPlan_original_values: any;
  feedingPlan: any = {};
  editMode: boolean = false;
  @ViewChild('caloriesInput') calories1Input?: ElementRef;

  constructor(
    public toastr: ToastrService,
    private serviceRegisterFeedingPlan: RegisterFeedingPlanService,
    private serviceGetFeedingPlan: GetFeedingPlanService
  ) { }

  ngOnInit() {
    this.getFeedingPlanByUser();
  }

  toggleEdit() {
    if (!this.editMode) {
      this.editMode = true;
      this.feedingPlan_original_values = { ...this.feedingPlan };
      this.calories1Input?.nativeElement.focus();
    }
    else {
      /* istanbul ignore next */
      if (this.validateIfAllowRegister()) {
        // Registro de valores de plan de alimentacion
        let newFeedingPlan = new FeedingPlan(
          sessionStorage.getItem('user_id')!,
          this.feedingPlan.numero_semanas,
          this.convert_number_to_string()
        );
        this.serviceRegisterFeedingPlan.registerFeedingPlan(newFeedingPlan)
          .subscribe(registerSuccess => {
            this.toastr.success('Confirmación', 'Se registro plan de alimentacion exitosamente!', { closeButton: true });
            this.getFeedingPlanByUser();
          });
        this.feedingPlan_original_values = { ...this.feedingPlan };
        this.editMode = false;
      }
    }
  }

  getFeedingPlanByUser() {
    this.feedingPlan = {"plan_alimentacion":{"domingo":"","jueves":"","lunes":"","martes":"","miercoles":"","sabado":"","viernes":""}};
    /* istanbul ignore next */
    this.serviceGetFeedingPlan.getFeedingPlanByUser(sessionStorage.getItem('user_id')!)
      .pipe(
        switchMap(getFeedingPlanSuccess => {
          this.toastr.success('Confirmación', 'Consulta de información exitosa!', { closeButton: true });
          this.feedingPlan = getFeedingPlanSuccess;
          this.feedingPlan_original_values = { ...this.feedingPlan };
          return [];
        })
      )
      .subscribe(() => { });
  }

  validateIfAllowRegister() {
    if (this.feedingPlan && 'plan_alimentacion' in this.feedingPlan &&
      'lunes' in this.feedingPlan.plan_alimentacion &&
      'martes' in this.feedingPlan.plan_alimentacion &&
      'miercoles' in this.feedingPlan.plan_alimentacion &&
      'jueves' in this.feedingPlan.plan_alimentacion &&
      'viernes' in this.feedingPlan.plan_alimentacion &&
      'sabado' in this.feedingPlan.plan_alimentacion &&
      'domingo' in this.feedingPlan.plan_alimentacion &&
      'numero_semanas' in this.feedingPlan) {
      return true;
    }
    return false;
  }

  convert_number_to_string(): any {
    let plan_alimentacionString = '';
    plan_alimentacionString = JSON.stringify(this.feedingPlan.plan_alimentacion, (key, value) => {
      if (typeof value === 'number') {
        return value.toString();
      }
      return value;
    });
    return JSON.parse(plan_alimentacionString);
  }

  cancel() {
    this.feedingPlan = { ...this.feedingPlan_original_values };
    this.editMode = false;
  }

}
