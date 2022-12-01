import { Component } from '@angular/core';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.scss']
})
export class AirQualityComponent {
  title:string = "Air Quality";
  upperTemp:number = 93;
  temperture:number = 72;
  lowerTemp:number = 61;
  upArrow:string = "https://cdn4.iconfinder.com/data/icons/materia-flat-arrows-symbols-vol-2/24/018_064_arrow_up_top_high-512.png";
  lowerArrow:string = "https://icones.pro/wp-content/uploads/2021/02/icone-de-fleche-vers-le-bas-orange.png";
}
