import { Component } from '@angular/core';

@Component({
  selector: 'app-strintr',
  templateUrl: './strintr.component.html',
  styleUrls: ['./strintr.component.css']
})


export class StrintrComponent
 {

  public Name:string="Roshan";

  public  Display =() =>{
    return "Marvellous Infosysytems";
  }
}
