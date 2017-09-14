import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  token = "Bearer BQDUFTHZe0eJyr8V1GuSqSQjdcePOGBeoW6S3k5-Dd4mwOMBIj2VMOgpPFy7Wpyc9Lk-n0oOeiFeaPU5Rht8EA;";
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists/"


  constructor(private _http:Http) { }

  getArtistas( termino:string){


    let headers = new Headers();
    headers.append('authorization', this.token)
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

  getArtista (id:string){
    
  
      let headers = new Headers();
      headers.append('authorization', this.token)
      let query = id;
      let url = this.urlArtista + query;
      
      return this._http.get(url, {headers})
                        .map( res => {
                            console.log(res.json());
                            // this.artistas = res.json().artists.items;
                            // console.log(this.artistas);
                            // return this.artistas;
                            return res.json();
                        });
  
  }

  getTop (id:string){
    
  
      let headers = new Headers();
      headers.append('authorization', this.token)
      let query = `${id}/top-tracks?country=MX`;
      let url = this.urlArtista + query;
      
      return this._http.get(url, {headers})
                        .map( res => {
                            console.log(res.json());
                            return res.json().tracks;
                        });
  
  }

}
