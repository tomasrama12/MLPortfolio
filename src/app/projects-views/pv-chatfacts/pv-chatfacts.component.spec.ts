import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvChatfactsComponent } from './pv-chatfacts.component';

describe('PvChatfactsComponent', () => {
  let component: PvChatfactsComponent;
  let fixture: ComponentFixture<PvChatfactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PvChatfactsComponent]
    });
    fixture = TestBed.createComponent(PvChatfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
