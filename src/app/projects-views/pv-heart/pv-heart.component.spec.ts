import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvHeartComponent } from './pv-heart.component';

describe('PvHeartComponent', () => {
  let component: PvHeartComponent;
  let fixture: ComponentFixture<PvHeartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PvHeartComponent]
    });
    fixture = TestBed.createComponent(PvHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
