import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: []
})
export class RadarComponent {

  public radarChartLabels:string[] = ['Defensa', 'Ataque', 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  
   public radarChartData:any = [
     {data: [45,90, 65, 59, 90, 81, 56, 55, 40], label: 'Wolverine'},
     {data: [75,75, 28, 48, 40, 19, 96, 27, 100], label: 'Magneto'}
   ];
   public radarChartType:string = 'radar';
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }

   public randomize():void{
    let _radarChartData:Array<any> = new Array(this.radarChartData.length);
    for (let i = 0; i < this.radarChartData.length; i++) {
      _radarChartData[i] = {data: new Array(this.radarChartData[i].data.length), label: this.radarChartData[i].label};
      for (let j = 0; j < this.radarChartData[i].data.length; j++) {
        _radarChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.radarChartData = _radarChartData;
   }

}
