import { Component } from '@angular/core';

import { MapasService } from "./services/mapas.service";
import { Marcador } from "./interfaces/marcador";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat:number = 21.473311;
  lng:number =  -104.855755;
  zoom:number= 15;

  constructor(public _ms:MapasService){

  }
  clickMapa(event){
    console.log(event)
    let nuevo_marcador:Marcador = {
      lat:event.coords.lat,
      lng: event.coords.lng,
      titulo: "Sin titulo",
      draggable: true
    }
    this._ms.insertarMarcador(nuevo_marcador)
  }
}
