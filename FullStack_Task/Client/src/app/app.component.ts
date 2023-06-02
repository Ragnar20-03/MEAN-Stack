import { Component ,OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';

  public Arr :any =[]

  constructor (private mobj : MarvellousService){}

  ngOnInit(){
    return this.mobj.getDetails().subscribe(data => this.Arr = data)
  }
}
