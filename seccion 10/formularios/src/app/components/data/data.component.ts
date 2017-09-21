import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

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
    email:'cmulloa@gruposcit.com',
    //pasatiempos: ["correr","dormir", "comer"]
  }

  constructor() { 
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl( '' , [
                                  Validators.required,
                                  Validators.minLength(3)
                                ]),
        'apellido': new FormControl('', [Validators.required, this.noUlloa ]),
      }),
      'email': new FormControl('', 
                              [
                                Validators.required, 
                                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
                              ]),
      'pasatiempos': new FormArray([
          new FormControl('Correr', Validators.required)
      ])
                              
    });

    // cargar el objeto usuario en el formulario
    //this.forma.setValue(this.usuario);

  }

  ngOnInit() {
  }

  guardarCambios(){
    console.log(this.forma.value);
    //this.forma.reset(this.usuario);
    // this.forma.reset({
    //   email:"",
    //   nombrecompleto:{
    //     nombre:"",
    //     apellido:""
    //   }
    // })
  }

  agregarPasatiempo(){
    console.log((<FormArray>this.forma.controls['pasatiempos']));
    (<FormArray>this.forma.controls['pasatiempos']).push(new FormControl('', Validators.required));
  }

  noUlloa( control:FormControl ): {[s:string]:boolean}{
    if (control.value == "ulloa"){
      return {
        noulloa:true
      };
    }
    return null;
  }

}
