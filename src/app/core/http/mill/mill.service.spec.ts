import { TestBed } from '@angular/core/testing';

import { MillService } from './mill.service';

describe('MillService', () => {
  let service: MillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
