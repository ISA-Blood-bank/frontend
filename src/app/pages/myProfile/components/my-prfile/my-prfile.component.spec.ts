import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrfileComponent } from './my-prfile.component';

describe('MyPrfileComponent', () => {
  let component: MyPrfileComponent;
  let fixture: ComponentFixture<MyPrfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPrfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPrfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
