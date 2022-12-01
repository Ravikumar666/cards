import { Component } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent {
  title:string = "Audio";
  num:number = 2;
  button:string="Playinng";
  total:string= "Total";
  num2:number= 5;
}
