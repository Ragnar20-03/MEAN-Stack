import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public data:string="Clicke above Button";
  public Myaction = () => {
    console.log("You clicked");
    this.data="Submit Button clicked";

  }
public MyActionNew(hii:any)
{
  console.log(hii);
  // this.data=hii
}
}
