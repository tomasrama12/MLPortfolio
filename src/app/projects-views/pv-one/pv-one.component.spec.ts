import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvOneComponent } from './pv-one.component';

describe('PvOneComponent', () => {
  let component: PvOneComponent;
  let fixture: ComponentFixture<PvOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
