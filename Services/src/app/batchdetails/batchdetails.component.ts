import { Component , OnInit} from '@angular/core';
import { Marvellousservice } from '../marvellous.service';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent 
{
    public input : any= [];

    constructor( public mobj: Marvellousservice)
    {
      
    }
    
    ngOnInit()
    {
      this.input=this.mobj.GetBatchDetails();
    }
}
