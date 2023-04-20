import { Component ,OnInit} from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit {

  public list:any=[];
  constructor(private mobj:MarvellousService)
  {

  }
  ngOnInit() {
     this.mobj.GetDetails() 
     .subscribe(data => this.list=data)
  }
} 

/*
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
console.log(materials.map(material => material.length));
*/