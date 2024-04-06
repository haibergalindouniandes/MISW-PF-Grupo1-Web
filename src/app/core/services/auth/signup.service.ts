import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from '../../models/auth/signup';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public apiUrl: string = environment.baseUrlUsers + 'crear-usuario';
  public headers = new HttpHeaders({ 'X-API-Key': 'a033d2c0' });

  constructor(private http: HttpClient) { }

  signUp(new_user: Signup): Observable<Signup> {
    return this.http.post<Signup>(this.apiUrl, new_user, { headers: this.headers });
  }

}
