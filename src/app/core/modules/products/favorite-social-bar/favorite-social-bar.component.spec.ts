import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSocialBarComponent } from './favorite-social-bar.component';

describe('FavoriteSocialBarComponent', () => {
  let component: FavoriteSocialBarComponent;
  let fixture: ComponentFixture<FavoriteSocialBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteSocialBarComponent]
    });
    fixture = TestBed.createComponent(FavoriteSocialBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
