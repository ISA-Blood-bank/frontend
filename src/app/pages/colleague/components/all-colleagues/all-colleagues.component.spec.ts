import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllColleaguesComponent } from './all-colleagues.component';

describe('AllColleaguesComponent', () => {
  let component: AllColleaguesComponent;
  let fixture: ComponentFixture<AllColleaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllColleaguesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllColleaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
