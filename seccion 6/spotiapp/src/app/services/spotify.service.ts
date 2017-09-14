import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";


  constructor(private _http:Http) { }

  getArtistas( termino:string){


    let headers = new Headers();
    headers.append('authorization', 'Bearer BQBq-nOuT9EbWNkfeXyJUxQf1h6_Wuf3a3igjKk_74RYNC19vxS-Yw2chCfgZHqyD9SBasEWhcVEifyO_Ejq3g;')
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;
    
    //usaremos un observable para decirle a angular que siga trabajando pero que esté al pendiente de la info
    // console.log(url);
    return this._http.get(url, {headers})
                      .map( res => {
                          // console.log(res.json().artists.items);
                          this.artistas = res.json().artists.items;
                          console.log(this.artistas);
                          // return this.artistas;
                      });

  }

}
