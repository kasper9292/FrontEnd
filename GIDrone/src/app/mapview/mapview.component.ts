import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lat: number = 52.513286;
  lng: number = 6.093789;
  zoom: number = 14;

}
