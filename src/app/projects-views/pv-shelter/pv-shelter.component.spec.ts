import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvShelterComponent } from './pv-shelter.component';

describe('PvShelterComponent', () => {
  let component: PvShelterComponent;
  let fixture: ComponentFixture<PvShelterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PvShelterComponent]
    });
    fixture = TestBed.createComponent(PvShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
