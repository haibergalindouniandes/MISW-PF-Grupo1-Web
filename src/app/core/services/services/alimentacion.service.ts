import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Alimentacion } from '../../models/services/alimentacion';

@Injectable({
  providedIn: 'root'
})
export class ConsultarPlanAlimentacionService {

  private apiUrl: string = environment.baseUrlGestorPlanNutricional + `nutricion/plan-nutricional/${sessionStorage.getItem('user_id')}`
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  consulrarPlanAlimentacion(): Observable<Alimentacion> {
    return this.http.get<Alimentacion>(this.apiUrl, { headers: this.headers });
  }
}
