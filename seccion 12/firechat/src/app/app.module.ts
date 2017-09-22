import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// cuando deseas usar ngModel es necesario hacer este import
import { FormsModule } from "@angular/forms";

//los modulos que se necesitan para usar angularfire2
import { AngularFireModule } from 'angularfire2';

// esto lo importamos si queremos usar la autenticación de firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// aquií es el archivo enviroment donde metimos la config de firebase
import { environment } from '../environments/environment';

//componentes
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';

//servicios
import { ChatService } from "./services/chat.service";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
