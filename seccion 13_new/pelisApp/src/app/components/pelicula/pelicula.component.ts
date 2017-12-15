import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  regresarA:string=""
  busqueda:string=""

  constructor(public _ps:PeliculasService, public route:ActivatedRoute) {
      this.route.params.subscribe(params=>{
        this.regresarA = params['pag'];
        if(params['busqueda']){
          this.busqueda = params['busqueda'];
        }
        this._ps.getPelicula(params['id']).subscribe(data=>{
          this.pelicula=data;
          console.log(this.pelicula)
        });
      })
   }

  ngOnInit() {
  }

}
