import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Register } from '../../models/services/register';
import { Service } from '../../models/services/service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl: string = environment.baseUrlServices + 'servicios';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  registerService(register: Register): Observable<Service> {
    return this.http.post<Service>(this.apiUrl, register, { headers: this.headers });
  }
}
