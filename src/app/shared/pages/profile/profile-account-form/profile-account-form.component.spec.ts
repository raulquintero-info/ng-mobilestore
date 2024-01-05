import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAccountFormComponent } from './profile-account-form.component';

describe('ProfileAccountFormComponent', () => {
  let component: ProfileAccountFormComponent;
  let fixture: ComponentFixture<ProfileAccountFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileAccountFormComponent]
    });
    fixture = TestBed.createComponent(ProfileAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
