import { Injectable } from '@angular/core';
import { ScheduledUsers } from '../../models/services/scheduled-users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListScheduledUsersService {

  private apiUrl: string = environment.baseUrlConsults + 'consultas/servicios/agendados';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  getScheduledUsersByService(serviceId: string): Observable<ScheduledUsers[]> {
    return this.http.get<ScheduledUsers[]>(`${this.apiUrl}/${serviceId}`, { headers: this.headers });
  }

}
