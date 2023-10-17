import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceLinkComponent } from './source-link.component';

describe('SourceLinkComponent', () => {
  let component: SourceLinkComponent;
  let fixture: ComponentFixture<SourceLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceLinkComponent]
    });
    fixture = TestBed.createComponent(SourceLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
