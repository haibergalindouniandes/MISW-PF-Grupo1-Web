/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ListScheduledUsersService } from './list-scheduled-users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: ListScheduledUsers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListScheduledUsersService]
    });
  });

  it('should ...', inject([ListScheduledUsersService], (service: ListScheduledUsersService) => {
    expect(service).toBeTruthy();
  }));
});
