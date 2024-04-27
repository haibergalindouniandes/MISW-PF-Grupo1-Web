/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegisterService } from './register.service';
import { Register } from '../../models/services/register';
import { environment } from '../../../../environments/environment';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterService]
    });
    service = TestBed.inject(RegisterService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a service', () => {
    const mockRegister: Register = {
      "nombre": "Carrera los Andes Backend",
      "descripcion": "Carrera benefica a favor de los niños de cancer, se iniciara en el Parque Campella atravesando diversas calles",
      "frecuencia": "Mensual",
      "costo": "25000 COP",
      "numero_minimo_participantes": 1,
      "numero_maximo_participantes": 10,
      "lugar": "Bogotá - El Salitre",
      "fecha": "2024-04-13",
      "id_usuario": "fc51d940-f755-11ee-bea5-2528b3b3fb6c",
      "horario": [
        "8:00:00 a. m.",
        "9:00:00 a. m.",
        "10:00:00 a. m.",
        "11:00:00 a. m.",
        "12:00:00 p. m.",
        "1:00:00 p. m.",
        "2:00:00 p. m.",
        "3:00:00 p. m.",
        "4:00:00 p. m.",
        "5:00:00 p. m."
      ]
    };
    const expectedUrl = `${environment.baseUrlServices}servicios`;
    service.registerService(mockRegister).subscribe(result => {
      expect(result).toBeTruthy();
    });
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mockRegister);
    req.flush({});
  });

});
