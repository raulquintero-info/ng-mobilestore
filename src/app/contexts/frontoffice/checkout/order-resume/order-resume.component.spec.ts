import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderResumeComponent } from './order-resume.component';

describe('OrderResumeComponent', () => {
  let component: OrderResumeComponent;
  let fixture: ComponentFixture<OrderResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderResumeComponent]
    });
    fixture = TestBed.createComponent(OrderResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
