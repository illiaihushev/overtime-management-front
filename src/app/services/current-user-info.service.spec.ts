import { TestBed } from '@angular/core/testing';

import { CurrentUserInfoService } from './current-user-info.service';

describe('CurrentUserInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentUserInfoService = TestBed.get(CurrentUserInfoService);
    expect(service).toBeTruthy();
  });
});
