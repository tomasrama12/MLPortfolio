import { Component, Input } from '@angular/core';
import * as hljs from 'highlight.js';


@Component({
  selector: 'app-code-snipets',
  templateUrl: './code-snipets.component.html',
  styleUrls: ['./code-snipets.component.css']
})
export class CodeSnipetsComponent {
  constructor() { }
  @Input() code!: string;
  ngOnInit(){
    console.log(this.code)

  }
  ngAfterViewInit(){
    hljs.default.highlightAll();
  }
  
}
