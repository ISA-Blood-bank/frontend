import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSCheduledDisplayComponent } from './all-scheduled-display.component';

describe('AllSCheduledDisplayComponent', () => {
  let component: AllSCheduledDisplayComponent;
  let fixture: ComponentFixture<AllSCheduledDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSCheduledDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSCheduledDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
