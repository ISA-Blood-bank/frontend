import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStaffEditFormComponent } from './medical-staff-edit-form.component';

describe('MedicalStaffEditFormComponent', () => {
  let component: MedicalStaffEditFormComponent;
  let fixture: ComponentFixture<MedicalStaffEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalStaffEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalStaffEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
