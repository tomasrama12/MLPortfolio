import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-source-link',
  templateUrl: './source-link.component.html',
  styleUrls: ['./source-link.component.css']
})
export class SourceLinkComponent {
@Input() link!: string;
}
