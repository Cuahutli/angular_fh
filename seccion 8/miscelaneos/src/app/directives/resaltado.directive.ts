import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private _el:ElementRef) { 
    // console.log("directiva llamada")
    
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') 
  mouseEntro(){
    this.resaltar(this.nuevoColor || "yellow");
  }

  @HostListener('mouseleave') 
  mouseSalio(){
    this.resaltar(null);
  }

  private resaltar(color:string){
    this._el.nativeElement.style.backgroundColor = color;
  }


}
