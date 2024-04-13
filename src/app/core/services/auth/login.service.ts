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

  private apiUrl: string = environment.baseUrlUsers + 'usuarios/login';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  signIn(credentials: Signin): Observable<Login> {
    console.log(new Date() + "::::::::: " + "llamado servicio Login");
    console.log(new Date() + ": " + credentials);
    console.log(new Date() + ": " + credentials.email);
    console.log(new Date() + ": " + credentials.password);
    console.log(new Date() + ": " + this.apiUrl);
    return this.http.post<Login>(this.apiUrl, credentials, { headers: this.headers });
  }
}
