/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { GetFeedingPlanService } from './get-feeding-plan.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: GetFeedingPlan', () => {

  let service: GetFeedingPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GetFeedingPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
