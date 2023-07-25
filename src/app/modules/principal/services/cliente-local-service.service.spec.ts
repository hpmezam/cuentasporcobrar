import { TestBed } from '@angular/core/testing';

import { ClienteLocalServiceService } from './cliente-local-service.service';

describe('ClienteLocalServiceService', () => {
  let service: ClienteLocalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteLocalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
