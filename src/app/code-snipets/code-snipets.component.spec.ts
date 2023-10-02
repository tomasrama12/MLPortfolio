import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSnipetsComponent } from './code-snipets.component';

describe('CodeSnipetsComponent', () => {
  let component: CodeSnipetsComponent;
  let fixture: ComponentFixture<CodeSnipetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeSnipetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeSnipetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
