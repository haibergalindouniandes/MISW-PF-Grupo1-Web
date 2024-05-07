import { Injectable } from '@angular/core';
import { Notification } from '../../models/services/notification';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendNotificationService {

  private apiUrl: string = environment.baseUrlServices + 'servicios/notificacion';
  private headers = new HttpHeaders({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });

  constructor(private http: HttpClient) { }

  sendMasiveNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl, notification, { headers: this.headers });
  }

}
