import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Alimentacion } from '../../models/services/alimentacion';
import { Entrenamiento } from '../../models/services/entrenamiento';

@Injectable({
  providedIn: 'root'
})
export class ConsultarPlanEntrenamientoService {

  private apiUrl: string = environment.baseUrlGestorPlanEntrenamiento + `/entrenamientos/plan-entrenamiento/usuario/${sessionStorage.getItem('user_id')}`
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  consulrarPlanAEntrenamiento(): Observable<Entrenamiento> {
    return this.http.get<Entrenamiento>(this.apiUrl, { headers: this.headers });
  }
}
