import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
    this._spotifyService.getArtistas("metallica").subscribe( data =>{
      console.log("esto es del search.component");
      console.log(data);
    });
  }

}
