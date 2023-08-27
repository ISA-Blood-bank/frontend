import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVisitedComponent } from './all-visited.component';

describe('AllVisitedComponent', () => {
  let component: AllVisitedComponent;
  let fixture: ComponentFixture<AllVisitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVisitedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVisitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
