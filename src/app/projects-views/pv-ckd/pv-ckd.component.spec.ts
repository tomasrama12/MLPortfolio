import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvCkdComponent } from './pv-ckd.component';

describe('PvCkdComponent', () => {
  let component: PvCkdComponent;
  let fixture: ComponentFixture<PvCkdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PvCkdComponent]
    });
    fixture = TestBed.createComponent(PvCkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
