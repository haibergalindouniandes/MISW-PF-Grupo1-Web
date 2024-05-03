/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ConsultarPlanAlimentacionService } from './alimentacion.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Alimentacion } from '../../models/services/alimentacion';
import { environment } from '../../../../environments/environment';

describe('Service: Nutrition', () => {

  let service: ConsultarPlanAlimentacionService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultarPlanAlimentacionService]
    });

    service = TestBed.inject(ConsultarPlanAlimentacionService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should ...', inject([ConsultarPlanAlimentacionService], (service: ConsultarPlanAlimentacionService) => {
    expect(service).toBeTruthy();
  }));

  it('should fetch plan alimentacion', () => {
    const mockAlimentacion: Alimentacion = {
      id: 'c999284e-cac7-4254-ac44-e6d0f8d27dd0', id_usuario: 'dd4e9051-075f-11ef-83bf-6c94660fac66', numero_semanas: 5, fecha_actualizacion: '2024-05-13', fecha_creacion: '2024-05-13',
      plan_alimentacion: {
        alimentacion: '81c4cf58-6fc7-4ce2-9e48-bae61ae1dd50',
        id: '888e9051-075f-11ef-83bf-6c94660fac66',
        lunes: 2000,
        martes: 2000,
        miercoles: 2000,
        jueves: 2000,
        viernes: 2000,
        sabado: 2000,
        domingo: 2000
      }
    };
    service.consulrarPlanAlimentacion().subscribe((data) => {
      expect(data).toEqual(mockAlimentacion);
    });

    const req = httpTestingController.expectOne(`${environment.baseUrlNutrition}nutricion/plan-nutricional/${sessionStorage.getItem('user_id')}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockAlimentacion);
  });

});
