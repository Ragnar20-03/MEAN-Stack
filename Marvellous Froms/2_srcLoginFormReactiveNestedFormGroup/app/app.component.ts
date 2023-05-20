import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  MarvellousForm = new FormGroup(
    {
      username : new FormControl('Piyush'),
      passowrd : new FormControl(''),
      ConfirmPass : new FormControl(''),
      // Add new nested Form Group
      MarvellousClass : new FormGroup(
        {
          batch : new FormControl('Python'),
          fees : new FormControl('5000')
        }
      )

    }
  );
}
