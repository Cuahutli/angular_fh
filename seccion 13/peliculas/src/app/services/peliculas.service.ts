import { Injectable } from '@angular/core';

import { Http, Jsonp } from "@angular/http";
import "rxjs/Rx"; //para utilizar el map

@Injectable()
export class PeliculasService {

  private apikey:string = "adb57d3308c2c5633486f667b0b2ca65";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(  private _jsonp:Jsonp, 
                private _http:Http) {
  }

  getPopulares(){
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url ).map( res=> res.json());
  }

  buscarPelicula(texto:string){
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get(url).map( res=>res.json());
  }

  // image.tmdb.org/t/p/w300

}
