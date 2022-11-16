import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodCenterRegisterFormComponent } from './blood-center-register-form.component';

describe('BloodCenterRegisterFormComponent', () => {
  let component: BloodCenterRegisterFormComponent;
  let fixture: ComponentFixture<BloodCenterRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodCenterRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodCenterRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
