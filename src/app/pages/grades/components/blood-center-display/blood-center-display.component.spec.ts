import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodCenterDisplayComponent } from './blood-center-display.component';

describe('BloodCenterDisplayComponent', () => {
  let component: BloodCenterDisplayComponent;
  let fixture: ComponentFixture<BloodCenterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodCenterDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodCenterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
