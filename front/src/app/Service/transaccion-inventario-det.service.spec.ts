import { TestBed } from '@angular/core/testing';

import { TransaccionInventarioDetService } from './transaccion-inventario-det.service';

describe('TransaccionInventarioDetService', () => {
  let service: TransaccionInventarioDetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaccionInventarioDetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
