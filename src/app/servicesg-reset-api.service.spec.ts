import { TestBed } from '@angular/core/testing';

import { ServicesgResetApiService } from './servicesg-reset-api.service';

describe('ServicesgResetApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesgResetApiService = TestBed.get(ServicesgResetApiService);
    expect(service).toBeTruthy();
  });
});
