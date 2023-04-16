import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public batch: string = "Angular";
  public Fees: number = 18500;
 
  constructor()
  {
    var s:string= "This Is Constructor";
    console.log(s);
    

  };
  DisplayDetails() {
    return "This is Web Developement Batch";
  }

}
