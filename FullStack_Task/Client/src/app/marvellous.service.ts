import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iBatches } from './batches';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

   URL = "http://localhost:5100"

  constructor(private hobj : HttpClient) { }

  public getDetails():Observable<iBatches[]>{
    return this.hobj.get<iBatches[]>(this.URL);
  }
}
