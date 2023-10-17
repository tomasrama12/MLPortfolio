import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvTitanicComponent } from './pv-titanic.component';

describe('PvTitanicComponent', () => {
  let component: PvTitanicComponent;
  let fixture: ComponentFixture<PvTitanicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PvTitanicComponent]
    });
    fixture = TestBed.createComponent(PvTitanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
