import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle-text-section',
  templateUrl: './subtitle-text-section.component.html',
  styleUrls: ['./subtitle-text-section.component.css']
})
export class SubtitleTextSectionComponent {
@Input() title!: string;
@Input() text!: string;
}
