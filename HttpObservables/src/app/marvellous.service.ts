import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detais } from './abc';
import {Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  public URL: string = "/assets/Data/data.json"
  constructor(private hobj: HttpClient) {

  }

  public GetDetails = ():Observable<detais[]> => {
    return this.hobj.get<detais[] >(this.URL);
  }

}
