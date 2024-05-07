import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RegisterFeedingResultsService } from '../../../../core/services/nutrition/register-feeding-results.service';
import { FeedingResults } from '../../../../core/models/nutrition/feeding-results';
import { GetFeedingResultsService } from '../../../../core/services/nutrition/get-feeding-results.service';
import { switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { DonutChartService } from '../../../../core/services/nutrition/donut-chart.service';
import { GetFeedingPlanService } from '../../../../core/services/nutrition/get-feeding-plan.service';

@Component({
  selector: 'app-results-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {

  originalResults: any;
  feedingResults: any = {};
  feedingPlan: any = {};
  editMode: boolean = false;
  selectedDate: string = '';
  @ViewChild('caloriasInput') calorias1Input?: ElementRef;

  constructor(
    public toastr: ToastrService,
    private serviceRegisterFeedingResults: RegisterFeedingResultsService,
    private serviceGetFeedingResults: GetFeedingResultsService,
    private serviceGetFeedingPlan: GetFeedingPlanService,
    private serviceDonutChart: DonutChartService
  ) { }

  ngOnInit() {
    this.selectedDate = this.getFormattedDate();
    this.getFeedingPlanByUser();
  }

  onDateChange(selectedDate: string) {
    this.editMode = false;
    this.getFeedingPlanByUser();
  }

  toggleEdit() {
    if (!this.editMode) {
      this.editMode = true;
      this.originalResults = { ...this.feedingResults };
      this.calorias1Input?.nativeElement.focus();
    }
    else {
      /* istanbul ignore next */
      if (this.validateIfAllowRegister()) {
        // Registro de resutlados de alimentacion
        let newFeedingResults = new FeedingResults(
          undefined,
          this.feedingResults["calorias_1"].toString(),
          this.feedingResults["calorias_2"].toString(),
          this.feedingResults["calorias_3"].toString(),
          this.selectedDate,
          sessionStorage.getItem('user_id')!,
          this.feedingResults["ml_agua"].toString()
        );
        this.serviceRegisterFeedingResults.registerFeedingResults(newFeedingResults)
          .subscribe(registerSuccess => {
            this.toastr.success('Confirmación', 'Se registraron resultados exitosamente!', { closeButton: true });
            this.getFeedingPlanByUser();
          });
        this.originalResults = { ...this.feedingResults };
        this.editMode = false;
      }
    }
  }

  /* istanbul ignore next */
  getFeedingResultsByDates(stardDate: string, endDate: string) {
    this.feedingResults = {};
    this.serviceGetFeedingResults.getFeedingResultsByDates(sessionStorage.getItem('user_id')!, stardDate, endDate)
      .pipe(
        switchMap(getFeedingResultsSuccess => {
          this.toastr.success('Confirmación', 'Consulta de información exitosa!', { closeButton: true });
          this.feedingResults = getFeedingResultsSuccess[0];
          this.originalResults = { ...this.feedingResults };
          this.sendDataDonutChart();
          return [];
        })
      )
      .subscribe(() => { });
  }

  getFeedingPlanByUser() {
    this.feedingResults = {};
    /* istanbul ignore next */
    this.serviceGetFeedingPlan.getFeedingPlanByUser(sessionStorage.getItem('user_id')!)
      .pipe(
        switchMap(getFeedingPlanSuccess => {
          this.feedingPlan = getFeedingPlanSuccess;
          this.sendDataDonutChart();
          this.getFeedingResultsByDates(this.selectedDate, this.selectedDate);
          return [];
        })
      )
      .subscribe(() => { });
  }

  validateIfAllowRegister() {
    if (this.feedingPlan && 'plan_alimentacion' in this.feedingPlan
      && this.feedingResults &&
      'calorias_1' in this.feedingResults &&
      'calorias_2' in this.feedingResults &&
      'calorias_3' in this.feedingResults &&
      'ml_agua' in this.feedingResults) {
        return true;
    }
    return false;
  }

  getFormattedDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getTotalCalories() {
    return parseInt(this.feedingResults["calorias_1"]) +
      parseInt(this.feedingResults["calorias_2"]) +
      parseInt(this.feedingResults["calorias_3"]);
  }

  /* istanbul ignore next */
  sendDataDonutChart() {
    let data = { data: [this.getCaloriesByDayOfWeek(), this.getTotalCalories()], labels: ['Meta Kcal', 'Kcal restantes'] };
    this.serviceDonutChart.setData(data);
  }

  getDayOfWeek() {
    const date = new Date(this.selectedDate);
    const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    return days[date.getDay()];
  }

  getCaloriesByDayOfWeek() {
    return this.feedingPlan.plan_alimentacion[this.getDayOfWeek()];
  }

  cancel() {
    this.feedingResults = { ...this.originalResults };
    this.editMode = false;
  }

}
