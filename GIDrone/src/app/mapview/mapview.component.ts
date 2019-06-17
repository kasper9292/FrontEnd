import { Component, OnInit } from '@angular/core';
import { Orb } from '../orbmaker/orbmaker.component';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //ITPH
  lat: number = 52.509084;
  lng: number = 6.066918;
  zoom: number = 14;

  //De Peperbus
  lat2: number = 52.512307; 
  lng2 : number = 6.089754;

}
