import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagtegoriesFormComponent } from './cagtegories-form.component';

describe('CagtegoriesFormComponent', () => {
  let component: CagtegoriesFormComponent;
  let fixture: ComponentFixture<CagtegoriesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CagtegoriesFormComponent]
    });
    fixture = TestBed.createComponent(CagtegoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
