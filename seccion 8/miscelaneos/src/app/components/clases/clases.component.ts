import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: []
})
export class ClasesComponent implements OnInit {
  alerta:string = "alert-danger";

  propiedades:any = {
    danger:false
  }

  cargando:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.cargando = true;
    setTimeout( ()=> this.cargando = false, 3000);
  }

}
