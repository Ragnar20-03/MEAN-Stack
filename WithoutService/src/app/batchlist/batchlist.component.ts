import { Component } from '@angular/core';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent {

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
