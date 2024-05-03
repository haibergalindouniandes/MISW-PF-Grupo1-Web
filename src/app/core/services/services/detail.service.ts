import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../../models/services/service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  public apiUrl: string = environment.baseUrlConsults + 'consultas/servicios';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  getServiceById(service_id: string): Observable<Service> {
    return this.http.get<Service>(`${this.apiUrl}/${service_id}`, { headers: this.headers });
  }


}
