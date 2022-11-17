import { TestBed } from '@angular/core/testing';

import { RegistrationMedicalStaffService } from './registration-medical-staff-service.service';

describe('RegistrationMedicalStaffServiceService', () => {
  let service: RegistrationMedicalStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationMedicalStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
