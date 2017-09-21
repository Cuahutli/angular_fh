import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma:FormGroup;
  usuario:any = {
    nombrecompleto: {
      nombre:'Cuahutli',
      apellido:'Ulloa'
    },
    email:'cmulloa@gruposcit.com'
  }

  constructor() { 
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl( '' , [
                                  Validators.required,
                                  Validators.minLength(3)
                                ]),
        'apellido': new FormControl('', Validators.required),
      }),
      'email': new FormControl('', 
                              [
                                Validators.required, 
                                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
                              ]),

    });

    // cargar el objeto usuario en el formulario
    this.forma.setValue(this.usuario);

  }

  ngOnInit() {
  }

  guardarCambios(){
    console.log(this.forma.value);
    //this.forma.reset(this.usuario);
    this.forma.reset({
      email:"",
      nombrecompleto:{
        nombre:"",
        apellido:""
      }
    })
  }

}
