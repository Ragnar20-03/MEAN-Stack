import { Component , OnInit} from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FullStackClient';

  public message : any ;

  constructor(private mobj:MarvellousService) 
  {

  }

  ngOnInit() {

      this.mobj.getBatches().subscribe(data => {this.message = data })
  }

}
