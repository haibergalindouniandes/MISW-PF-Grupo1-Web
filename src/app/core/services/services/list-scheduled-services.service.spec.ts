/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ListScheduledServicesService } from './list-scheduled-services.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: ListScheduledServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListScheduledServicesService]
    });
  });

  it('should ...', inject([ListScheduledServicesService], (service: ListScheduledServicesService) => {
    expect(service).toBeTruthy();
  }));
});
