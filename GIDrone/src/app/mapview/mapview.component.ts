import { Component, OnInit } from '@angular/core';
import { RouteService } from '../service/route.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {

  constructor(private routeservice : RouteService) { }

  coordinaten : any[];

  //THE BASE OF THE DRONE: DRONEBASE!!!!!
  lat: number = 52.5092322;
  lng: number = 6.0663000;
  zoom: number = 14;

  ngOnInit() {
    this.routeservice.getKortsteRoute().subscribe(
      (data : any) => 
      {this.coordinaten = data;
        console.log(data); 
        console.log(this.coordinaten);
        console.log
      },
      (error: HttpErrorResponse) => { 
      console.log("Wow, geen route???");
      console.log(error.message);
      
    },
    ()=>{console.log("Compleet")});
  }
}