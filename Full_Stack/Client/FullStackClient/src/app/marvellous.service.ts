import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { iBatches } from './batches';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor(private http:HttpClient) { 

  }

  public getBatches = (): Observable<iBatches[]> =>
  {
    return this.http.get<iBatches[]>("http://localhost:5100/GETbatches/")
  }
}
