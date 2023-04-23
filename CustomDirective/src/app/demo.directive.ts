import { Directive } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor() {
    console.log("Inside Directive Constructor");
    
   }

}
