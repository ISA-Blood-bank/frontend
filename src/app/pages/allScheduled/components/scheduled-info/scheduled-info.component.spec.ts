import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledInfoComponent } from './scheduled-info.component';

describe('ScheduledInfoComponent', () => {
  let component: ScheduledInfoComponent;
  let fixture: ComponentFixture<ScheduledInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
