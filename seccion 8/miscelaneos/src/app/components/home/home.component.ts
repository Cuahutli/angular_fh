import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-clases></app-clases>
  <p [appResaltado]="'red'">	
    Hola mundo desde app Component
  </p>

  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  constructor() { 
    console.log("constructor")
  }
  
  ngOnInit() {
    console.log("metodo OnInit");
  }
  
  ngDoCheck(): void {
    console.log("metodo DoCheck");
  }
  ngOnChanges(): void {
    console.log("metodo OnChanges");
  }
  
  ngOnDestroy(): void {
    console.log("metodo OnDestroy");
  }
  ngAfterViewChecked(): void {
    console.log("metodo AfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("metodo AfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("metodo AfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("metodo AfterContentInit");
  }

}
