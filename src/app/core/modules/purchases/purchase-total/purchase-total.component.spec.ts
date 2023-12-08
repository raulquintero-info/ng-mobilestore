import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseTotalComponent } from './purchase-total.component';

describe('PurchaseTotalComponent', () => {
  let component: PurchaseTotalComponent;
  let fixture: ComponentFixture<PurchaseTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseTotalComponent]
    });
    fixture = TestBed.createComponent(PurchaseTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
