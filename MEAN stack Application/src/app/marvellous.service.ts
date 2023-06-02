import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IBatch } from './Batch';

@Injectable({
  providedIn: 'root'
})

export class MarvellousService 
{
  Serverurl = "http://localhost:5100";

  constructor(public http : HttpClient) { }
  
  getDetails() : Observable<IBatch[]>
  {
    return this.http.get<IBatch[]>(this.Serverurl);
  }
}
