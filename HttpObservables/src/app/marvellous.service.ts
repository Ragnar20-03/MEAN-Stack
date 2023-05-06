import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { details } from './abc';
import {Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  public URL: string = "/assets/Data/data.json"
  constructor(private hobj: HttpClient) {

  }

  public GetDetails = ():Observable<details[]> => {
    return this.hobj.get<details[] >(this.URL);
  }

}
