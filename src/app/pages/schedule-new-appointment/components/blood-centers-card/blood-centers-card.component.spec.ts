import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodCentersCardComponent } from './blood-centers-card.component';

describe('BloodCentersCardComponent', () => {
  let component: BloodCentersCardComponent;
  let fixture: ComponentFixture<BloodCentersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodCentersCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodCentersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
