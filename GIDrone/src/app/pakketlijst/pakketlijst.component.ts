import { Component, OnInit } from '@angular/core';
import { DroneService } from '../service/pakket.service';
import { Pakketje } from '../domain/pakketje';
import { HttpErrorResponse } from '@angular/common/http';
import { RouteService } from '../service/route.service';
import { Route } from '../domain/route';

@Component({
  selector: 'app-pakketlijst',
  templateUrl: './pakketlijst.component.html',
  styleUrls: ['./pakketlijst.component.css']
})
export class PakketlijstComponent implements OnInit {

  pakketlijst : Pakketje[];
  routelijst : Route[];
  route : Route[];

  constructor(private droneservice: DroneService, private routeservice: RouteService) { }

  ngOnInit() {
    // this.droneservice.getPakketjes().subscribe(
    //   (data : Pakketje[]) => this.pakketlijst = data,
    //   (error: HttpErrorResponse) => { 
    //     console.log("Oh nee, hè! Gaat het weer fout!");
    //     console.log(error.message);
        
    //   },
    //   ()=>{console.log("Compleet")}
    // )
    this.routeservice.createRoute().subscribe(
      (data : Route[]) => {this.routelijst = data; console.log(data);},
      (error: HttpErrorResponse) => { 
      console.log("Oh nee, hè! Gaat het weer fout!");
      console.log(error.message);
    },
    ()=>{console.log("Compleet")}

    );
  }

  Bereken(){
    this.routeservice.getKortsteRoute().subscribe(
      (data : Route[]) => {this.route = data; console.log(data);},
      (error: HttpErrorResponse) => { 
        console.log("Oh nee, hè! Gaat het weer fout!");
        console.log(error.message);
      },
      ()=>{console.log("Compleet")}
    )
  }
}
