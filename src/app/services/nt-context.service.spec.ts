import { TestBed } from '@angular/core/testing';

import { NtContextService } from './nt-context.service';

describe('NtContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NtContextService = TestBed.get(NtContextService);
    expect(service).toBeTruthy();
  });
});
