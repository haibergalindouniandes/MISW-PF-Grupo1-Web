/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ListServicesUserService } from './list-services-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: ListServicesUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListServicesUserService]
    });
  });

  it('should ...', inject([ListServicesUserService], (service: ListServicesUserService) => {
    expect(service).toBeTruthy();
  }));
});
