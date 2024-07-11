import { TestBed } from '@angular/core/testing';

import { ProductosDataService } from './productos-data.service';

describe('ProductosDataService', () => {
  let service: ProductosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
