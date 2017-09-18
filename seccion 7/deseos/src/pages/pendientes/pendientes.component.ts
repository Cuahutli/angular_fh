import { Component, OnInit } from '@angular/core';

//ionic

import { NavController } from "ionic-angular";

import { ListaDeseosService } from "../../app/services/lista-deseos.service";
import { AgregarComponent } from "../agregar/agregar.component";

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent implements OnInit {

    constructor( private _listaDeseos:ListaDeseosService,
                 private _navCtrl:NavController) { }

    ngOnInit() { 

    }

    irAgregar(){
        this._navCtrl.push(AgregarComponent);
    }

}