/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DetailService } from './detail.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Service } from '../../models/services/service';

describe('Service: Detail', () => {

  let service: DetailService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DetailService]
    });

    service = TestBed.inject(DetailService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should ...', inject([DetailService], (service: DetailService) => {
    expect(service).toBeTruthy();
  }));

  it('should fetch service by id', () => {
    const service_id = '123';
    const mockService: Service = { id: '123', nombre: 'Test Service', lugar: 'Bogotá - El Salitre', costo: '25000 COP' };

    service.getServiceById(service_id).subscribe((data) => {
      expect(data).toEqual(mockService);
    });

    const req = httpTestingController.expectOne(`${service.apiUrl}/${service_id}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockService);
  });
});
