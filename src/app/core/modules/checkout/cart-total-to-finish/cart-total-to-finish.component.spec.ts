import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTotalToFinishComponent } from './cart-total-to-finish.component';

describe('CartTotalToFinishComponent', () => {
  let component: CartTotalToFinishComponent;
  let fixture: ComponentFixture<CartTotalToFinishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartTotalToFinishComponent]
    });
    fixture = TestBed.createComponent(CartTotalToFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
