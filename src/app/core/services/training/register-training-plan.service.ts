import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TrainingPlan } from '../../models/training/training-plan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterTrainingPlanService {

  private apiUrl: string = environment.baseUrlTraining + 'entrenamientos/plan-entrenamiento';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  registerTrainingPlan(new_training_plan: TrainingPlan): Observable<TrainingPlan[]> {
    return this.http.post<TrainingPlan[]>(this.apiUrl, new_training_plan, { headers: this.headers });
  }

}
