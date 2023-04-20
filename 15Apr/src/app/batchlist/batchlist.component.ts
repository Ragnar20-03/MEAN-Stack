import { Component ,OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent implements OnInit{

  public details:any=[];

  constructor(private sobj:MarvellousService){

  }

  ngOnInit() {
    this.sobj.GetDetails().subscribe(data => this.details=data)
  } 
}


