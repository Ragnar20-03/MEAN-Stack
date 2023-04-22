import { Component ,OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';
import { IBatches } from '../Batches';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent implements OnInit{
  public list:any=[];

  constructor (public mobj:MarvellousService)
  {

  }
  ngOnInit () 
  {
    this.mobj.GetBatchDetails().subscribe(data => this.list=data)
  }
  public clickk (){
  console.log(this.list.length);
  
}
  
}


