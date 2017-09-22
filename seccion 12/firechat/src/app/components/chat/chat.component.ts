import { Component, OnInit } from '@angular/core';
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  mensaje:string="";  
  constructor(public _cs:ChatService) {
     this._cs.cargarMensajes()
     .subscribe( (data)=>{
       console.log("Mensajes cargados");
       console.log(data);
     })
   }

  ngOnInit() {
  }

  enviar(){
    if(this.mensaje.length == 0){
      return;
    }else{
      this._cs.agregarMensaje(this.mensaje) //aqui está la promesa
      .then( ()=>{
        console.log("echo");
      })
      .catch(()=>{
        console.error("error");
      });
    }
  }

}
