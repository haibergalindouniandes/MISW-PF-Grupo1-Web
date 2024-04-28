/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { RegisterTrainingPlanService } from './register-training-plan.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: RegisterTrainingPlan', () => {
  let service: RegisterTrainingPlanService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterTrainingPlanService]
    });
    service = TestBed.inject(RegisterTrainingPlanService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should ...', inject([RegisterTrainingPlanService], (service: RegisterTrainingPlanService) => {
    expect(service).toBeTruthy();
  }));
});
