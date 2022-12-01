import { Component } from '@angular/core';

@Component({
  selector: 'app-displays',
  templateUrl: './displays.component.html',
  styleUrls: ['./displays.component.scss']
})
export class DisplaysComponent {
  title:string = "Displays";
  numb:number = 10;
  dinum:String = "/16";
  onTime:string = "On Time";
  seconds:string = "00:00";
}
