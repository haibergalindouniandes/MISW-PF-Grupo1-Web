import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TrainingPlan } from '../../models/training/training-plan';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetTrainingPlanService {

  private apiUrl: string = environment.baseUrlTraining + 'entrenamientos/plan-entrenamiento/usuario';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  getTrainingPlanByUser(user_id: string): Observable<TrainingPlan[]> {
    return this.http.get<TrainingPlan[]>(`${this.apiUrl}/${user_id}`, { headers: this.headers });
  }

}
