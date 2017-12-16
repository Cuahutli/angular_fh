import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// para mapas
import { AgmCoreModule } from "@agm/core";
import { AgmCircle } from '@agm/core/directives/circle';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCWKX9O8IAxfil4VHTD9DTXtxOM1LRAgOE"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
