/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { GetTrainingPlanService } from './get-training-plan.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: GetTrainingPlan', () => {
  let service: GetTrainingPlanService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetTrainingPlanService]
    });
    service = TestBed.inject(GetTrainingPlanService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should ...', inject([GetTrainingPlanService], (service: GetTrainingPlanService) => {
    expect(service).toBeTruthy();
  }));
});
