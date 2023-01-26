import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodCentersDisplayComponent } from './blood-centers-display.component';

describe('BloodCentersDisplayComponent', () => {
  let component: BloodCentersDisplayComponent;
  let fixture: ComponentFixture<BloodCentersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodCentersDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodCentersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
