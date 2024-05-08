/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { SendNotificationService } from './send-notification.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: SendNotification', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SendNotificationService]
    });
  });

  it('should ...', inject([SendNotificationService], (service: SendNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
