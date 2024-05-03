/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SignupService } from './signup.service';
import { Signup } from '../../models/auth/signup';

describe('Service: Signup', () => {
  let service: SignupService;
  let signup: Signup;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SignupService]
    });
    service = TestBed.inject(SignupService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Send a POST request to the correct URL with the provided data', () => {
    const mockSignupData: Signup = {
      usuario: 'test_user',
      contrasena: 'test_password',
      nombres: 'Test',
      peso: 70,
      apellidos: 'SportApp',
      edad: 25,
      tipo_documento: 'CC',
      altura: 170,
      numero_documento: '12345678',
      pais_nacimiento: 'Colombia',
      ciudad_nacimiento: 'Bogotá',
      genero: 'MASCULINO',
      pais_residencia: 'Colombia',
      ciudad_residencia: 'Bogotá',
      deportes: ['Ciclismo', 'Carreras'],
      antiguedad: 1,
      tipo_plan: 'PREMIUM',
      tipo_usuario: 'USUARIO'
    };

    service.signUp(mockSignupData).subscribe();

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockSignupData);
    req.flush({});
    signup = new Signup(
      'test_user',
      'test_password',
      'Test',
      70,
      'SportApp',
      25,
      'CC',
      170,
      '12345678',
      'Colombia',
      'Bogotá',
      'genero',
      'Colombia',
      'Bogotá',
      ['Ciclismo', 'Carreras'],
      5,
      'PREMIUM',
      'USUARIO',
      []
    );
    expect(signup).toBeTruthy();
  });

});
