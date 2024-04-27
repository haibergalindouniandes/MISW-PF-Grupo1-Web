/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { GetFeedingResultsService } from './get-feeding-results.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';
import { FeedingResults } from '../../models/nutrition/feeding-results';

describe('Service: GetFeedingResults', () => {

  let service: GetFeedingResultsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetFeedingResultsService]
    });
    service = TestBed.inject(GetFeedingResultsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch feeding results by dates', () => {
    const userId = '123';
    const startDate = '2024-01-01';
    const endDate = '2024-01-31';
    const expectedUrl = `${environment.baseUrlNutrition}nutricion/resultados-alimentacion/${userId}/${startDate}/${endDate}`;
    const mockFeedingResults: FeedingResults[] = [];
    service.getFeedingResultsByDates(userId, startDate, endDate).subscribe(results => {
      expect(results).toEqual(mockFeedingResults);
    });
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockFeedingResults);
  });
});
