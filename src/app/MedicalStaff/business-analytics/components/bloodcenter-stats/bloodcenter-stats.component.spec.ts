import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodcenterStatsComponent } from './bloodcenter-stats.component';

describe('BloodcenterStatsComponent', () => {
  let component: BloodcenterStatsComponent;
  let fixture: ComponentFixture<BloodcenterStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodcenterStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodcenterStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
