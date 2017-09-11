import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit{
  heroes:any[] = [];
  termino:string;

  constructor( private _activatedRoute:ActivatedRoute, 
               private _heroesService:HeroesService) {
   }
   ngOnInit(){
      this._activatedRoute.params.subscribe( params => {
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroes(this.termino);
        // console.log(this.heroes);
      })
   }

}
