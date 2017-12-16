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
  marcadorSel:any = null;
  draggable:string="1";

  constructor(public _ms:MapasService){
    this._ms.cargarMarcadores();

  }
  clickMapa(event){
    console.log(event)
    let nuevo_marcador:Marcador = {
      lat:event.coords.lat,
      lng: event.coords.lng,
      titulo: "Sin titulo",
      draggable: true
    }
    this._ms.insertarMarcador(nuevo_marcador);
    this._ms.guardarMarcadores();
  }

  clickMarcador(marcador:Marcador, index:number){
    console.log(marcador, index)
    this.marcadorSel = marcador;
    if (this.marcadorSel.draggable){
      this.draggable = "1"
    }else{
      this.draggable = "0"
    }
  }

  cambiarDraggable(){
    console.log(this.draggable);
    if(this.draggable == "1"){
      this.marcadorSel.draggable = true
    }else{
      this.marcadorSel.draggable = false
    }
  }

  dragEndMarcador(mark:Marcador, evento ){
    console.log(mark, evento);    
    mark['lat'] = evento.coords.lat;
    mark['lng'] = evento.coords.lng;
    this._ms.guardarMarcadores()
  }

  borrarMarcador(index:number){
    this._ms.borrarMarcador(index);
  }
  
}
