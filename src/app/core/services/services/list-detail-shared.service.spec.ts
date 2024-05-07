/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ListDetailSharedService } from './list-detail-shared.service';
import { Service } from '../../models/services/service';

describe('Service: ListDetailShared', () => {

  let service: ListDetailSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListDetailSharedService]
    });
    service = TestBed.inject(ListDetailSharedService);
  });

  it('should ...', inject([ListDetailSharedService], (service: ListDetailSharedService) => {
    expect(service).toBeTruthy();
  }));

  it('should emit data when setData is called', (done: DoneFn) => {
    const testData = new Service('e67859da-0832-11ef-8a25-251c34276102', 'Carrera los Andes Test', 'Bogotá - El Salitre', '25000 COP');
    service.getDataService().subscribe((data) => {
      expect(data).toEqual(testData);
      done();
    });
    service.setDataService(testData);
  });
});
