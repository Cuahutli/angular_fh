import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit{
  heroes:any[] = [];

  constructor( private _activatedRoute:ActivatedRoute, 
               private _heroesService:HeroesService) {
   }
   ngOnInit(){
      this._activatedRoute.params.subscribe( params => {
        // console.log(params['termino']);
        this.heroes = this._heroesService.buscarHeroes(params['termino']);
        // console.log(this.heroes);
      })
   }

}
