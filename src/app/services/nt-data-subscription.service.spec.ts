import { TestBed } from '@angular/core/testing';

import { NtDataSubscriptionService } from './nt-data-subscription.service';

describe('NtDataSubscriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NtDataSubscriptionService = TestBed.get(NtDataSubscriptionService);
    expect(service).toBeTruthy();
  });
});
