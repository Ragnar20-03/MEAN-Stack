import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IBatches } from './Batches';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {
  
  constructor(public hobj: HttpClient) { 
    
  }
  // In future this path contains the url of Database / server (Node.ja)
  public URL:String ="/assets/Data/Batches.json";

  public GetBatchDetails(): Observable<IBatches[]> 
  {
    return this.hobj.get<IBatches[]>(this.URL);
  }

}
 