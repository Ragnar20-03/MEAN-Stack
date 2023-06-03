import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  register_URL="http://localhost:5100/api/register"
  
  constructor(private hobj : HttpClient) { }

  registerUser(user:any)
  {
    return this.hobj.post<any>( this.register_URL , user)
  }
}
