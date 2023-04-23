import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  // dependancy injection \
  // internally angular will automatically perform 
  // ElementRef eobj=new ElementRef();
  constructor(public eobj:ElementRef) {

    }

@HostListener('mouseenter')onmouseenter()
{
  this.eobj.nativeElement.style.color='orange';
  
}
@HostListener('mouseleave')onmouseleave()
{
  this.eobj.nativeElement.style.color='red';
}


}