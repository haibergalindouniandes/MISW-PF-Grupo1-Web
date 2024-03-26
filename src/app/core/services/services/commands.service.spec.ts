/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommandsService } from './commands.service';

describe('Service: Commands', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommandsService]
    });
  });

  it('should ...', inject([CommandsService], (service: CommandsService) => {
    expect(service).toBeTruthy();
  }));
});
