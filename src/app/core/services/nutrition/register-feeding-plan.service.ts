import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FeedingPlan } from '../../models/nutrition/feeding-plan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterFeedingPlanService {

  private apiUrl: string = environment.baseUrlNutrition + 'nutricion/plan-nutricional';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  registerFeedingPlan(new_feeding_plan: FeedingPlan): Observable<FeedingPlan[]> {
    return this.http.post<FeedingPlan[]>(this.apiUrl, new_feeding_plan, { headers: this.headers });
  }

}
