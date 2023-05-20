import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  // Add characterictics which are required in form
  nForm:FormGroup;
  
  post:any;
  
  description:String= '';
  
  name:string= '';

  // Use dependency injection for FormBuilder
  constructor(private fb : FormBuilder)
  {
    this.nForm = fb.group(
        {
      'name' : [null,Validators.required],
      'description' : [null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(20)])],
      'validate': ''
        }
    )
  }

  // Copy the data from html to our class characteristics
  addPost(post : any)
  {
    this.description = post.description;
    this.name = post.name;
  }
}
