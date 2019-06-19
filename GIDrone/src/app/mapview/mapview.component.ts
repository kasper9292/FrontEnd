import { Component, OnInit } from '@angular/core';
// import { }
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

  //De Peperbus en andere zaken
  coordinaten = 
  [{lat: 52.512307, long: 6.089754}, {lat: 52.513992, long: 6.068717}, {lat: 52.520138, long: 6.094287},{lat: 52.514251, long: 6.111607}];
  // [{lat: 52.527529, long: 6.056316}, {lat: 52.516503, long: 6.088677}, {lat: 52.517029, long: 6.047475}, {lat: 52.528362, long: 6.080786}]; //Duivelse Coordinaten
}
