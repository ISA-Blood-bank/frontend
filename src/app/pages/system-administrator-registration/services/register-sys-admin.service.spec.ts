import { TestBed } from '@angular/core/testing';

import { RegisterSysAdminService } from './register-sys-admin.service';

describe('RegisterSysAdminService', () => {
  let service: RegisterSysAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterSysAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
