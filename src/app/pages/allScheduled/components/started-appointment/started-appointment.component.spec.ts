import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedAppointmentComponent } from './started-appointment.component';

describe('StartedAppointmentComponent', () => {
  let component: StartedAppointmentComponent;
  let fixture: ComponentFixture<StartedAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartedAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
