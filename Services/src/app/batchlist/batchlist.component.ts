import { Component , OnInit} from '@angular/core';
import { Marvellousservice } from '../marvellous.service';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent {
  public batches : any=[];

  constructor(public mobj:Marvellousservice)
  {
  }
  ngOnInit()
  {
    this.batches=this.mobj.GetBatchDetails()

    
  }

}
