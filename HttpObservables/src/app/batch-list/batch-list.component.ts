import { Component , OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';


@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {
  public list:any=[];

  constructor(public mobj:MarvellousService)
  {

  }

  ngOnInit(){
       this.mobj.GetDetails().subscribe(data => this.list=data)
  }  

}
