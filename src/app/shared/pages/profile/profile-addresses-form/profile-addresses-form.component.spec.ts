import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddressesFormComponent } from './profile-addresses-form.component';

describe('ProfileAddressesFormComponent', () => {
  let component: ProfileAddressesFormComponent;
  let fixture: ComponentFixture<ProfileAddressesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileAddressesFormComponent]
    });
    fixture = TestBed.createComponent(ProfileAddressesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
