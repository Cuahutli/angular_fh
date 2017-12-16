import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// para mapas
import { AgmCoreModule } from "@agm/core";
import { AgmCircle } from '@agm/core/directives/circle';

// servicios
import { MapasService } from "./services/mapas.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCWKX9O8IAxfil4VHTD9DTXtxOM1LRAgOE"
    })
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
