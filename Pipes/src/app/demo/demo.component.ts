import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

    name:string="Marvellous Infosystems";
    today=new Date();
    value:number =32.8989978;
    Institute={
      "name":"Marvellous",
      "Location":"pune"
    }

}
