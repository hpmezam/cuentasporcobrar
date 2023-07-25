import { TestBed } from '@angular/core/testing';

import { BancosServiceService } from './bancos-service.service';

describe('BancosServiceService', () => {
  let service: BancosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
