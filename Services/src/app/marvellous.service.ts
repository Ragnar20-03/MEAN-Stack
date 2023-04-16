import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Marvellousservice {

  //  Functionaliity Provide here
  public GetBatchDetails() {
    return [
      {
        "Name": "PPA", "Fees": 18000, "Duration": "3.5 Months"
      },
      { 
        "Name": "LB", "Fees": 18200, "Duration": "3 Months" 
      },
      {
         "Name": "PPA", "Fees": 18500, "Duration": "4 Months"
      }

    ];
  }

  constructor() { }
}
