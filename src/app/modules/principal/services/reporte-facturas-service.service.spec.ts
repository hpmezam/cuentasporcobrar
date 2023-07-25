import { TestBed } from '@angular/core/testing';

import { ReporteFacturasServiceService } from './reporte-facturas-service.service';

describe('ReporteFacturasServiceService', () => {
  let service: ReporteFacturasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteFacturasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
