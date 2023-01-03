import { TestBed } from '@angular/core/testing';

import { ScheduledAppointmentsService } from './scheduled-appointments.service';

describe('ScheduledAppointmentsService', () => {
  let service: ScheduledAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
