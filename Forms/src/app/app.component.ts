import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms'
import { MarvellousService } from './marvellous.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Forms';

    registrationForm = new FormGroup({
    username : new FormControl('Roshan'),
    password : new FormControl(''),
    cpassword : new FormControl(''),

    address: new FormGroup({
      city : new FormControl(''),
      postalcode: new FormControl(''),
    })
  })

  constructor(public mobj: MarvellousService){}

    rData = {
      username :  '',
      password : '',
      city : ''
    }
  ngOnInit()
  {

  }

  postData(){
    this.mobj.postDetails(this.rData).subscribe( res => this.rData);
    console.log("send data")
  }





  setValues(){            // set value nedd all the parameters
      // this.registrationForm.setValue({
      //   username : 'Roshan',
      //   password : '123',
      //   cpassword : '123',
      //     address : {
      //       city : 'Malegaon',
      //       postalcode : '423203',
      //     }
      // }) 

      this.registrationForm.patchValue({
        username : 'Roshan',
        password : '123',
        cpassword : '123'
      })
  }

}
