import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent {
  heroes:any[] = [];

  constructor( private _activatedRoute:ActivatedRoute, 
               private _heroesService:HeroesService) {
      this._activatedRoute.params.subscribe( params => {
        console.log(params['termino']);
        this.heroes = this._heroesService.buscarHeroes(params['termino']);
        console.log(this.heroes);
      })
   }

}
