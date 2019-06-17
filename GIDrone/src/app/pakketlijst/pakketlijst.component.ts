import { Component, OnInit } from '@angular/core';
import { DroneService } from '../service/pakket.service';
import { Pakketje } from '../domain/pakketje';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pakketlijst',
  templateUrl: './pakketlijst.component.html',
  styleUrls: ['./pakketlijst.component.css']
})
export class PakketlijstComponent implements OnInit {

  pakketlijst : Pakketje[];
  geselecteerdepakket: Pakketje;
  buttonId: number; 

  constructor(private droneservice: DroneService ) { }

  ngOnInit() {
    this.droneservice.getPakketjes().subscribe(
      (data : Pakketje[]) => this.pakketlijst = data,
      (error: HttpErrorResponse) => { 
        console.log("Oh nee, hè! Gaat het weer fout!");
        console.log(error.message);
        
      },
      ()=>{console.log("Compleet")}
    )
  }

  retrieve(pakket: Pakketje) : void {
    this.geselecteerdepakket = pakket;
    this.buttonId = 0;
  }

  delete(pakket: Pakketje) : void {
    this.geselecteerdepakket = pakket;
    this.buttonId = 2;
  }
  
  update(pakket: Pakketje) : void {
    this.geselecteerdepakket = pakket;
    this.buttonId = 1;
  }
}
