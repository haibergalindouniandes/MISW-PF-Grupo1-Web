import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { Signin } from '../../models/auth/signin';
import { Login } from '../../models/auth/login';
import { environment } from '../../../../environments/environment';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call signIn method', () => {
    const signin: Signin = {
      email: 'prestador2024@uniandes.edu.co',
      password: 'Prestador2*24'
    };

    service.signIn(signin).subscribe((response: Login) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${environment.baseUrlUsers}usuarios/login`);
    expect(req.request.method).toBe('POST');
    req.flush({ token: 'testToken', user: { id: 1, email: 'prestador2024@uniandes.edu.co', role: 'user' } });
  });
});
