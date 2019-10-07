import { TestBed } from '@angular/core/testing';

import { OvertimeAppService } from './overtime-app.service';

describe('OvertimeAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OvertimeAppService = TestBed.get(OvertimeAppService);
    expect(service).toBeTruthy();
  });
});
