import { Component } from '@angular/core';

@Component({
  selector: 'app-temperture',
  templateUrl: './temperture.component.html',
  styleUrls: ['./temperture.component.scss']
})
export class TempertureComponent {
  title:string = "Temperature";
  hot:number = 26;
  cold:number = 18;
  temp:number = 21;
}
