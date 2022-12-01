import { Component } from '@angular/core';

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.scss']
})
export class LightingComponent {
  title:string= "Lightings";
  buttonName:string = "ON";
  total:string = "Total";
  num:number =43;
  num1:number =32;
}
