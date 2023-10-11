import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-square-preview',
  templateUrl: './project-square-preview.component.html',
  styleUrls: ['./project-square-preview.component.css']
})
export class ProjectSquarePreviewComponent {
@Input() title!: string;
@Input() description!: string;
@Input() imageRoute!: string;
}
