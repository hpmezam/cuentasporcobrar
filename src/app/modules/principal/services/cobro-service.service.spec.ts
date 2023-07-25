import { TestBed } from '@angular/core/testing';

import { CobroServiceService } from './cobro-service.service';

describe('CobroServiceService', () => {
  let service: CobroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CobroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
