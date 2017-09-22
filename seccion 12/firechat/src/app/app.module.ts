import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//los modulos que se necesitan para usar angularfire2
import { AngularFireModule } from 'angularfire2';

// esto lo importamos si queremos usar la autenticación de firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// aquií es el archivo enviroment donde metimos la config de firebase
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
