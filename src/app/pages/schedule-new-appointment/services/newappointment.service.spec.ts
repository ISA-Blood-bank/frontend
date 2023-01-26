import { TestBed } from '@angular/core/testing';

import { NewappointmentService } from './newappointment.service';

describe('NewappointmentService', () => {
  let service: NewappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
