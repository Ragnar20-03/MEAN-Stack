import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

   URL:string ="http://localhost:5100/GETbatches/"

  constructor(private hobj : HttpClient) { }

  public getData()
  {
    return this.hobj.get(this.URL);
  }
}
