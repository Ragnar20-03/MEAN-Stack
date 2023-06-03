import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  

  registerUserData = {
    email:"",
    password:""
  }

  constructor(private aobj:AuthService) {}

  registerUser()
  {
    this.aobj.registerUser(this.registerUserData).subscribe(
      res => console.log(res))
    
  }

}
