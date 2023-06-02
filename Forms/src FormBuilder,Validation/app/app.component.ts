import { Component } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';

    constructor ( private fb : FormBuilder){}

    registrationForm = this.fb.group({
      username : ['aa' ,Validators.required],
      password : [''],
      cpassword : [''],
        address : this.fb.group({
          city : ['City Name'],
          postalcode : ['00000']
        })
    })

    //   registrationForm = new FormGroup({
    //   username : new FormControl('Roshan'),
    //   password : new FormControl(''),
    //   cpassword : new FormControl(''),
  
    //   address: new FormGroup({
    //     city : new FormControl(''),
    //     postalcode: new FormControl(''),
    //   })
    // })
  
  
    setValues(){            

      this.registrationForm.patchValue({
        username : 'Roshan',
        password : '123',
        cpassword : '123'
      })
  }

}
