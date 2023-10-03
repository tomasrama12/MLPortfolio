import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-content',
  templateUrl: './image-content.component.html',
  styleUrls: ['./image-content.component.css']
})
export class ImageContentComponent {
@Input() imageRoute!: string;
}
