/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ListService } from './list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: List', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListService]
    });
  });

  it('should ...', inject([ListService], (service: ListService) => {
    expect(service).toBeTruthy();
  }));
});
