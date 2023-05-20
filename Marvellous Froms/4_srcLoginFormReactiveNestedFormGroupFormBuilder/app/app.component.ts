import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  // Inject FormBuilder service
  constructor(public fbobj : FormBuilder)
  {


  }

  MarvellousForm = this.fbobj.group(
    {
      username :['Piyush'],
      passowrd : ['abcd'],
      ConfirmPass : ['abcd'],
      MarvellousClass : this.fbobj.group(
        {
          batch :['Python'],
          fees : ['5000'] 
        }
      )
    }
  );
  /*
  MarvellousForm = new FormGroup(
    {
      username : new FormControl('Piyush'),
      passowrd : new FormControl(''),
      ConfirmPass : new FormControl(''),
      // Add new nes
      MarvellousClass : new FormGroup(
        {
          batch : new FormControl('Python'),
          fees : new FormControl('5000')
        }
      )
    }

  );*/

  // Method to set FormControl fields through program
  SetData()
  {
    this.MarvellousForm.setValue(
      {
        username : 'Piyush',
        passowrd : 'abcd',
        ConfirmPass :  'abcd',
        MarvellousClass : 
        {
          batch : 'Python',
          fees : '5000'
        }
      }
    )
  }
}
