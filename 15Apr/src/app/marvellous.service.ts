import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBatches } from 'src -Marvellous/app/Batches';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvellousService {
 
  public URL:string="/assets/Data/Batches.json"
constructor( public hobj:HttpClient){

}
public GetDetails = ():Observable<IBatches[]> => {
  
  return this.hobj.get<IBatches[]>(this.URL)
  
}
public hii()
{

}

}