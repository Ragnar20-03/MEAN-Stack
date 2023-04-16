import { Component } from '@angular/core';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent {

  public Batches = [
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
