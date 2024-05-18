/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterFeedingPlanService } from './register-feeding-plan.service';

describe('Service: RegisterFeedingPlan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterFeedingPlanService]
    });
  });

  it('should ...', inject([RegisterFeedingPlanService], (service: RegisterFeedingPlanService) => {
    expect(service).toBeTruthy();
  }));
});
