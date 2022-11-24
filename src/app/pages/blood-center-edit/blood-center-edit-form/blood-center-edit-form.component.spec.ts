import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodCenterEditFormComponent } from './blood-center-edit-form.component';

describe('BloodCenterEditFormComponent', () => {
  let component: BloodCenterEditFormComponent;
  let fixture: ComponentFixture<BloodCenterEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodCenterEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodCenterEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
