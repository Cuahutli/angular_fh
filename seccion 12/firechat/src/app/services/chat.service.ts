import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Mensaje } from "../interfaces/mensaje.interface";

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {
  chats: FirebaseListObservable<any[]>;
  usuario:any = null;

  constructor(private af: AngularFireDatabase, public afAuth:AngularFireAuth) {
    if (localStorage.getItem('usuario')){
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
  }

  cargarMensajes(){
    this.chats = this.af.list('/chats', {
      query:{
        limitToLast: 20,
        orderByKey: true,
      }
    });
    return this.chats;
  }

  agregarMensaje(texto:string){
    let mensaje:Mensaje = {
      nombre:this.usuario.displayName,
      mensaje:texto,
      uid: this.usuario.uid
    }

    return this.chats.push(mensaje); // regresa una promesa
  }

  login(proveedor:string) {
    let provider:any;
    if(proveedor === "google"){
      provider = new firebase.auth.GoogleAuthProvider();
    }else{
      provider = new firebase.auth.TwitterAuthProvider();
    }
    this.afAuth.auth.signInWithPopup(provider)  //regresa una promesa
    .then( (resp)=>{
      console.log(resp);
      this.usuario = resp.user;
      localStorage.setItem('usuario', JSON.stringify(this.usuario)) //hacemos el stringify por que en el Local Storage solo se pueden almacenar strings
    })
  }

  logout() {
    localStorage.removeItem('usuario');
    this.usuario =null;
    this.afAuth.auth.signOut();
  }

}
