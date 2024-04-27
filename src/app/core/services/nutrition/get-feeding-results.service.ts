import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { FeedingResults } from '../../models/nutrition/feeding-results'

@Injectable({
  providedIn: 'root'
})
export class GetFeedingResultsService {

  private apiUrl: string = environment.baseUrlNutrition + 'nutricion/resultados-alimentacion';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  getFeedingResultsByDates(user_id: string, date_start: string, date_end: string): Observable<FeedingResults[]> {
    return this.http.get<FeedingResults[]>(`${this.apiUrl}/${user_id}/${date_start}/${date_end}`, { headers: this.headers });
  }

}
