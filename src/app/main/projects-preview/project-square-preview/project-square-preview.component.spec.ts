import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSquarePreviewComponent } from './project-square-preview.component';

describe('ProjectSquarePreviewComponent', () => {
  let component: ProjectSquarePreviewComponent;
  let fixture: ComponentFixture<ProjectSquarePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSquarePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSquarePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
