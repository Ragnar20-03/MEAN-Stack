import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `<h1> Inside Second Component</h1>
  <h2>Concept of Inline In Angular</h2>`,
  styles: [
    `
      h1{
        color:red;
      }  
      h2
      {
        color : green;
      }
    `
  ]
})
export class SecondComponent {

}

// Command for not having files 
// ng generate component third --inline-template=true --inline-style=true