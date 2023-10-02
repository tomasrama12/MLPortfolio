import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-code-snipets',
  templateUrl: './code-snipets.component.html',
  styleUrls: ['./code-snipets.component.css']
})
export class CodeSnipetsComponent {

  @Input() code!: string;
  ngOnInit(){
    console.log(this.code)

  }
}
