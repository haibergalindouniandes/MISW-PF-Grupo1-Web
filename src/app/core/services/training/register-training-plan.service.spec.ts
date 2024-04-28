/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterTrainingPlanService } from './register-training-plan.service';

describe('Service: RegisterTrainingPlan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterTrainingPlanService]
    });
  });

  it('should ...', inject([RegisterTrainingPlanService], (service: RegisterTrainingPlanService) => {
    expect(service).toBeTruthy();
  }));
});
