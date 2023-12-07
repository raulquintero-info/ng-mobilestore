import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOnOfferComponent } from './products-on-offer.component';

describe('ProductsOnOfferComponent', () => {
  let component: ProductsOnOfferComponent;
  let fixture: ComponentFixture<ProductsOnOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsOnOfferComponent]
    });
    fixture = TestBed.createComponent(ProductsOnOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
