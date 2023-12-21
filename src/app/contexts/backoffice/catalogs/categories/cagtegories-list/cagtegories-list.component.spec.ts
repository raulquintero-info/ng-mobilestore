import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagtegoriesListComponent } from './cagtegories-list.component';

describe('CagtegoriesListComponent', () => {
  let component: CagtegoriesListComponent;
  let fixture: ComponentFixture<CagtegoriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CagtegoriesListComponent]
    });
    fixture = TestBed.createComponent(CagtegoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
