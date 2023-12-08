import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingTypeComponent } from './shipping-type.component';

describe('ShippingTypeComponent', () => {
  let component: ShippingTypeComponent;
  let fixture: ComponentFixture<ShippingTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingTypeComponent]
    });
    fixture = TestBed.createComponent(ShippingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
