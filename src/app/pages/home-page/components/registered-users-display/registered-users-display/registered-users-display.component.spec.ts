import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredUsersDisplayComponent } from './registered-users-display.component';

describe('RegisteredUsersDisplayComponent', () => {
  let component: RegisteredUsersDisplayComponent;
  let fixture: ComponentFixture<RegisteredUsersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredUsersDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredUsersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
