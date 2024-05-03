/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListDetailSharedService } from './list-detail-shared.service';

describe('Service: ListDetailShared', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListDetailSharedService]
    });
  });

  it('should ...', inject([ListDetailSharedService], (service: ListDetailSharedService) => {
    expect(service).toBeTruthy();
  }));
});
