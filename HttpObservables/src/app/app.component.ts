import { Component , OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpObservables';

  public data:any=[];

  constructor( public mobj:MarvellousService){

  }

  ngOnInit(){
        this.mobj.GetDetails().subscribe(hiii => this.data=hiii )
  }
}
