import { Component, OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';
import { ɵɵsyntheticHostProperty } from '@angular/core';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent implements OnInit {

  public details:any=[]

  constructor(public sobj: MarvellousService) {

  }       
  ngOnInit() {
      this.sobj.GetDetails().subscribe(data => this.details=data)
  }

}
