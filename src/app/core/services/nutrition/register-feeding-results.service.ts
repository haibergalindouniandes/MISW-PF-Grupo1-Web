import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { FeedingResults } from '../../models/nutrition/feeding-results'

@Injectable({
  providedIn: 'root'
})
export class RegisterFeedingResultsService {

  private apiUrl: string = environment.baseUrlNutrition + 'nutricion/resultados-alimentacion';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  registerFeedingResults(register: FeedingResults): Observable<FeedingResults> {
    return this.http.post<FeedingResults>(this.apiUrl, register, { headers: this.headers });
  }

}
