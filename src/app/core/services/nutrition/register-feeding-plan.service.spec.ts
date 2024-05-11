/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegisterFeedingPlanService } from './register-feeding-plan.service';

describe('Service: RegisterFeedingPlan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterFeedingPlanService]
    });
  });

  it('should ...', inject([RegisterFeedingPlanService], (service: RegisterFeedingPlanService) => {
    expect(service).toBeTruthy();
  }));
});
