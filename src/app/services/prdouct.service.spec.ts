import { TestBed } from '@angular/core/testing';

import { PrdouctService } from './prdouct.service';

describe('PrdouctService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrdouctService = TestBed.get(PrdouctService);
    expect(service).toBeTruthy();
  });
});
