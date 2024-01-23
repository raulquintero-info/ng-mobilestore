import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByMonthComponent } from './report-by-month.component';

describe('OrdersListComponent', () => {
  let component: ReportByMonthComponent;
  let fixture: ComponentFixture<ReportByMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportByMonthComponent]
    });
    fixture = TestBed.createComponent(ReportByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
