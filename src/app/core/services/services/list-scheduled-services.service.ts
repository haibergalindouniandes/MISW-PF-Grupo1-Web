import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../../models/services/service';

@Injectable({
  providedIn: 'root'
})
export class ListScheduledServicesService {

  private apiUrl: string = environment.baseUrlConsults + 'consultas/servicios/agendados';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  getScheduledServicesByUser(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}`, { headers: this.headers });
  }

}
