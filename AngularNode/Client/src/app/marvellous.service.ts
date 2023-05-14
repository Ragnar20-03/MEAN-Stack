import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  // Import for HTTP

@Injectable({
  providedIn: 'root'
})

export class MarvellousService 
{
  // Perform DI 
  constructor(private http : HttpClient) { }

  getBatches()
  {
    // Conect to the Node+express server
    return this.http.get("http://localhost:5100/getBatches");
  }
}
