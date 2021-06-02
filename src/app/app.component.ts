import { Component } from '@angular/core';
import { CalServiceService } from './cal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineshopping';
  sum:number;
  constructor(calservice:CalServiceService){
    this.sum=calservice.add(1,2);
  }
}
