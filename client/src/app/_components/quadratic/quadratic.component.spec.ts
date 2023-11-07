import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraticComponent } from './quadratic.component';

describe('QuadraticComponent', () => {
  let component: QuadraticComponent;
  let fixture: ComponentFixture<QuadraticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuadraticComponent]
    });
    fixture = TestBed.createComponent(QuadraticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
