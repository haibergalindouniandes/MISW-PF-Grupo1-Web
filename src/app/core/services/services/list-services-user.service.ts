import { Injectable } from '@angular/core';
import { Service } from '../../models/services/service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListServicesUserService {

  private apiUrl: string = environment.baseUrlConsults + 'consultas/servicios/usuario';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  getServicesByUser(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}`, { headers: this.headers });
  }

}
