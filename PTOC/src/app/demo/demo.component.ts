import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html', 
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
 @Input() public message="";

 @Output() public Myevent = new EventEmitter();
public onSend()
 { 
  this.Myevent.emit("THe Hii From child Component")
 }
}
