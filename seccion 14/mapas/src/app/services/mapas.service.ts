import { Injectable } from '@angular/core';
import { Marcador } from "../interfaces/marcador";

@Injectable()
export class MapasService {
  marcadores:Marcador[] = [];
  constructor() { 
    let nuevo_marcador:Marcador = {
      lat:21.473311,
      lng:-104.855755,
      titulo:"Procuraduria",
      draggable:true,
      desc: "esta es la procu"
    }

    this.marcadores.push(nuevo_marcador)
  }

  insertarMarcador(marcador:Marcador){
    this.marcadores.push(marcador)
  }

  borrarMarcador(index:number){
    this.marcadores.splice(index, 1);
    this.guardarMarcadores();
  }

  guardarMarcadores(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
  }

  cargarMarcadores(){
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }else{
      this.marcadores = [];
    }
  }

}
