import { TestBed } from '@angular/core/testing';

import { ScheduledAppointmentServicesService } from './scheduled-appointment-services.service';

describe('ScheduledAppointmentServicesService', () => {
  let service: ScheduledAppointmentServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledAppointmentServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
