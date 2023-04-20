import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit 
{
  // Create array to hold the information of batches
  public batches:any = [];

  // Add instance of Service in constructor
  constructor(private _batchservice:BatchService)
  {
  }

  // Call the service method once
  ngOnInit() 
  {
    this._batchservice.GetBatchDetails()
    .subscribe(data=>this.batches=data);
  }
}
