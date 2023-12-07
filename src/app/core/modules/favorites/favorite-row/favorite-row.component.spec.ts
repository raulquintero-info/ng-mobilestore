import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteRowComponent } from './favorite-row.component';

describe('FavoriteRowComponent', () => {
  let component: FavoriteRowComponent;
  let fixture: ComponentFixture<FavoriteRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteRowComponent]
    });
    fixture = TestBed.createComponent(FavoriteRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
