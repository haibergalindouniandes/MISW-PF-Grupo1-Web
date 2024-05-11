import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Scheduler } from '../../../models/services/scheduler';


@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  private apiUrl: string = environment.baseUrlServices + 'servicios/agendar';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  schedulerService(scheduler: Scheduler): Observable<Scheduler> {
    return this.http.post<Scheduler>(this.apiUrl, scheduler, { headers: this.headers });
  }
}
