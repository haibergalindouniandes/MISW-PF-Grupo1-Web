/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ListDetailSharedService } from './list-detail-shared.service';

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
    const testData = { id: 1, name: 'Test' };
    service.getData().subscribe((data) => {
      expect(data).toEqual(testData);
      done();
    });
    service.setData(testData);
  });
});
