import { TestBed } from '@angular/core/testing';

import { MedicalStaffEditService } from './medical-staff-edit.service';

describe('MedicalStaffEditService', () => {
  let service: MedicalStaffEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalStaffEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
