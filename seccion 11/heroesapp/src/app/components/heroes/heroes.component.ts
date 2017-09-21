import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";
import { Heroe } from "../../interfaces/heroe.interface";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes:any[] = [];
  loading:boolean =true;

  constructor(
    private _heroesService:HeroesService
  ) { 
    this._heroesService.obtenerHeroes().subscribe(data => {
      // console.log(data);// esto que está en la data es un objeto que tiene objetos
      // for( let key$ in data){
      //   console.log(data[key$]);
      //   let h = data[key$];
      //   h.key$ = key$;
      //   this.heroes.push(data[key$]);
      // }
      
      setTimeout(()=>{
        this.heroes = data;
        this.loading=false;
      },300)
      
    });
  }

  ngOnInit() {
  }

  eliminarHeroe(key$:string){
    this._heroesService.borrarHeroe(key$).subscribe(data =>{
      if(data){
        console.error(data);
      }else{
        //todo bien
        delete this.heroes[key$];
      }
    });
  }

}
