/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetTrainingPlanService } from './get-training-plan.service';

describe('Service: GetTrainingPlan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTrainingPlanService]
    });
  });

  it('should ...', inject([GetTrainingPlanService], (service: GetTrainingPlanService) => {
    expect(service).toBeTruthy();
  }));
});
