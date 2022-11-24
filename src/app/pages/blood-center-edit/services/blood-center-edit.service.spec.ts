import { TestBed } from '@angular/core/testing';

import { BloodCenterEditService } from './blood-center-edit.service';

describe('BloodCenterEditService', () => {
  let service: BloodCenterEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodCenterEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
