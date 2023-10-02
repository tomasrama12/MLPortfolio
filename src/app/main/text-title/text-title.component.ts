import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-title',
  templateUrl: './text-title.component.html',
  styleUrls: ['./text-title.component.css']
})
export class TextTitleComponent {
@Input() title!: string;
}
