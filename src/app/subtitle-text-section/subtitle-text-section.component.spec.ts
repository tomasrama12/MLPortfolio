import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleTextSectionComponent } from './subtitle-text-section.component';

describe('SubtitleTextSectionComponent', () => {
  let component: SubtitleTextSectionComponent;
  let fixture: ComponentFixture<SubtitleTextSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitleTextSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtitleTextSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
