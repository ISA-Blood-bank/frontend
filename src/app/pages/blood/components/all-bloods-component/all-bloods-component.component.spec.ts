import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBloodsComponentComponent } from './all-bloods-component.component';

describe('AllBloodsComponentComponent', () => {
  let component: AllBloodsComponentComponent;
  let fixture: ComponentFixture<AllBloodsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBloodsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBloodsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
