import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs/Rx";

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
      ]),
      'username': new FormControl('', Validators.required , this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl('', Validators.required),
                              
    });

    this.forma.controls['password2'].setValidators([Validators.required, this.noIgual.bind(this.forma)]);

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

  noIgual( control:FormControl ): any{ //{[s:string]:boolean}{
    let forma:any = this;
    // console.log(forma);
    
    if (control.value !== forma.controls['password1'].value){
      return {
        noiguales:true
      };
    }
    return null;
  }

  existeUsuario(control:FormControl): Promise<any>|Observable<any>{
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout(()=>{
          if (control.value == "strider"){
            resolve({
              existe:true
            });
          }else{
            resolve(null);
          }
        }, 3000)
      }
    )
    return promesa;
  }

}
