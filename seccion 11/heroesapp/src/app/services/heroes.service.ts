import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/Rx";

//interface
import { Heroe } from "../interfaces/heroe.interface";

@Injectable()
export class HeroesService {

  heroesURL:string = "https://heroesapp-9a17c.firebaseio.com/heroes.json"
  heroeURL:string = "https://heroesapp-9a17c.firebaseio.com/heroes/"

  constructor(private _http:Http) {

   }

   nuevoHeroe(heroe:Heroe){
     let body = JSON.stringify(heroe); // genera un string de un json válido
     let headers = new Headers({
       'Content-type':'application/json'
     }); 

     return this._http.post( this.heroesURL, body, { headers })  // esto { headers:headers } es igual a esto { headers} en ES6, si se llaman igual se pueden omitir
          .map( res=> {
            console.log(res.json());
            return res.json()
          });
   }


   actualizarHeroe(heroe:Heroe, key$:string){
    let body = JSON.stringify(heroe); // genera un string de un json válido
    let headers = new Headers({
      'Content-type':'application/json'
    }); 

    let url = `${this.heroeURL}${ key$ }.json`

    return this._http.put( url, body, { headers })  // esto { headers:headers } es igual a esto { headers} en ES6, si se llaman igual se pueden omitir
         .map( res=> {
           console.log(res.json());
           return res.json()
         });
  }

  obtenerHeroe(key$:string){
    let url = `${this.heroeURL}${key$}.json`
    return this._http.get(url).map(res=>{
      return res.json();
    })

  }

  obtenerHeroes(){
    return this._http.get(this.heroesURL).map(res=>{
      return res.json();
    })

  }

  borrarHeroe(key$:string){
    let url = `${this.heroeURL}${key$}.json`;
    return this._http.delete(url).map(res=>{
      return res.json();
    })

  }

}
