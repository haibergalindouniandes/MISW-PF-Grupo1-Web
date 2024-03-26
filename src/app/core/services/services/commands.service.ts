import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Register } from '../../models/services/register';
import { Service } from '../../models/services/service';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {

  private apiUrl: string = environment.baseUrlServices + 'servicios';
  private headers = new HttpHeaders({ 'X-API-Key': 'a033d2c0' });

  constructor(private http: HttpClient) { }

  registerService(register: Register): Observable<Service> {
    return this.http.post<Service>(this.apiUrl, register, { headers: this.headers });
  }
}
