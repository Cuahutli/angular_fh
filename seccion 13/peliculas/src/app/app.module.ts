import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from "@angular/http";

import { PeliculasService } from "./services/peliculas.service";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetalleComponent } from './components/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    NavbarComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [ PeliculasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
