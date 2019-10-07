import { TestBed } from '@angular/core/testing';

import { ExistingAppService } from './existing-app.service';

describe('ExistingAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExistingAppService = TestBed.get(ExistingAppService);
    expect(service).toBeTruthy();
  });
});
