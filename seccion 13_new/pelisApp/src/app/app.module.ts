import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

import { AppComponent } from './app.component';

//Servicios
import { PeliculasService } from "./services/peliculas.service";

//componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';

// pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

// Constante rutas
import { APP_ROUTING } from "./app.routes";
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule
    , HttpModule
    , FormsModule
    , JsonpModule
    , APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
