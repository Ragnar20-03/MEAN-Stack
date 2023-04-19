import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batches-list',
  templateUrl: './batches-list.component.html',
  styleUrls: ['./batches-list.component.css']
})
export class BatchesListComponent implements OnInit 
{
  // Create empty array to hold the batch details
  public batches :any= [];

  // Add the instance of service in side constructor
  constructor(public _batchservice: BatchService)
  {

  }

  // call the service method once in ngOnInit method
  ngOnInit() 
  {
    this._batchservice.GetBatchDetails()
    .subscribe(data=>this.batches=data);
  }

}
