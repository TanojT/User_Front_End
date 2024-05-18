import { TestBed } from '@angular/core/testing';

import { NtAuthenticationService } from './nt-authentication.service';

describe('NtAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NtAuthenticationService = TestBed.get(NtAuthenticationService);
    expect(service).toBeTruthy();
  });
});
