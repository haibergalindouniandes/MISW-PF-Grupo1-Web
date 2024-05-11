/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SchedulerService } from './scheduler.service';//
import { Scheduler } from '../../../models/services/scheduler';
import { environment } from '../../../../../environments/environment';

describe('RegisterService', () => {
  let service: SchedulerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SchedulerService]
    });
    service = TestBed.inject(SchedulerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a service', () => {
    const mockRegister: Scheduler = {
      "id_usuario":"3fa9f61c-05a4-11ef-b36f-4130a59f9bb7",
      "id_servicio":"da5b0bdf-657a-478b-9786-b942e06444bb",
      "email":"asd@asd.com",    
      "fecha":"2024-04-02",
      "hora":"12:01:01"
  };
    const expectedUrl = `${environment.baseUrlServices}servicios/agendar`;
    service.schedulerService(mockRegister).subscribe(result => {
      expect(result).toBeTruthy();
    });
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mockRegister);
    req.flush({});
  });

});
