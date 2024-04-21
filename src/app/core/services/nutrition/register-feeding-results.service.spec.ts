/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegisterFeedingResultsService } from './register-feeding-results.service';
import { FeedingResults } from '../../models/nutrition/feeding-results';
import { environment } from '../../../../environments/environment';

describe('Service: RegisterFeedingResults', () => {

  let service: RegisterFeedingResultsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterFeedingResultsService]
    });
    service = TestBed.inject(RegisterFeedingResultsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register feeding results', () => {
    const mockFeedingResults: FeedingResults = {
      calorias_1: "100",
      calorias_2: "200",
      calorias_3: "100",
      fecha: "2024-04-01",
      id: "ece4c27d-af2c-4681-ad34-d692d463faa5",
      id_usuario: "50e4d92c-fdef-11ee-8470-01e0aa2bcd86",
      ml_agua: "1500"
    };
    let feedingResults = new FeedingResults("ece4c27d-af2c-4681-ad34-d692d463faa5", "100", "100", "100", "2024-04-01", "50e4d92c-fdef-11ee-8470-01e0aa2bcd86", "1500");
    const expectedUrl = `${environment.baseUrlNutrition}nutricion/resultados-alimentacion`;
    service.registerFeedingResults(mockFeedingResults).subscribe(result => {
      expect(result).toEqual(mockFeedingResults);
    });
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mockFeedingResults);
    req.flush(mockFeedingResults);
  });

});
