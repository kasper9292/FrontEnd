import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orbmaker',
  templateUrl: './orbmaker.component.html',
  styleUrls: ['./orbmaker.component.css']
})
export class OrbmakerComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

  //https://angular-maps.com/api-docs/agm-core/directives/agmcircle
  //https://angular-maps.com/api-docs/agm-core/directives/agmpolyline
}

export class Orb {

  constructor(
    private _lat : number,
    private _long: number
    // ,private _radius: Number
    ){}

    get lat() { return this.lat }
    get long() { return this.long }
    // get radius() { return this.radius }

    set lat(lat : number) { this.lat = lat }
    set long(long : number ) { this.long = long }
    // set radius(rad : Number) { this.radius = rad }
}
