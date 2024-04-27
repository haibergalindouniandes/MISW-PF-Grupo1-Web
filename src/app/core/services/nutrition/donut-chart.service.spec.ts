/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DonutChartService } from './donut-chart.service';

describe('Service: DonutChart', () => {
  let service: DonutChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonutChartService]
    });
    service = TestBed.inject(DonutChartService);
  });

  it('should ...', inject([DonutChartService], (service: DonutChartService) => {
    expect(service).toBeTruthy();
  }));

  it('should set data', () => {
    const newData = { data: [100, 200], labels: ['Meta Kcal', 'Kcal restantes'] };
    service.setData(newData);
    service.getData().subscribe(data => {
      expect(data).toEqual(newData);
    });
  });

});
