import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat:number = 21.473311;
  lng:number =  -104.855755;
  zoom:number= 17;
}
