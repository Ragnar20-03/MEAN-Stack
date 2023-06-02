import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor(public http : HttpClient) { }

  URL = "http://localhost:5100/post"

  postDetails( userdata:any)
  {
     return this.http.post<any>(this.URL , userdata)
  }

} 
