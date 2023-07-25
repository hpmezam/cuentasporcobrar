import { TestBed } from '@angular/core/testing';

import { FacturasServiceService } from './facturas-service.service';

describe('FacturasServiceService', () => {
  let service: FacturasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
