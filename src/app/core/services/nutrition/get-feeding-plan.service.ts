import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FeedingPlan } from '../../models/nutrition/feeding-plan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFeedingPlanService {

  private apiUrl: string = environment.baseUrlNutrition + 'nutricion/plan-nutricional';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  getFeedingPlanByUser(user_id: string): Observable<FeedingPlan[]> {
    return this.http.get<FeedingPlan[]>(`${this.apiUrl}/${user_id}`, { headers: this.headers });
  }

}
