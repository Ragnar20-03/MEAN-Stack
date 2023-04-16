import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  public str:string="";
  public GetData(name:any)
  {
    this.str= "Welcome "+ name;
  }
}
