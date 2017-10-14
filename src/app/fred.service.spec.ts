/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FredService } from './fred.service';

describe('FredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FredService]
    });
  });

  it('should ...', inject([FredService], (service: FredService) => {
    expect(service).toBeTruthy();
  }));
});
