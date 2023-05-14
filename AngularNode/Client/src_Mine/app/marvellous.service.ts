import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' //Import for HTTP
@Injectable({
  providedIn: 'root'
})
export class MarvellousService {
URL : string = "http://localhost:5100/GETbatches";

  // Dependancy Injection
  constructor(private http : HttpClient) {
      }
   
      getBatches()
      {
        // Connect to Node Express Server
        return this.http.get(this.URL);
      }
}
