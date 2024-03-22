import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signin } from '../../models/auth/signin';
import { Login } from '../../models/auth/login';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = environment.baseUrl + 'users';
  private headers = new HttpHeaders({ 'X-API-Key': 'a033d2c0' });

  constructor(private http: HttpClient) { }

  signIn(credentials: Signin): Observable<Login> {
    return this.http.post<Login>(this.apiUrl, credentials, { headers: this.headers });
  }
}
