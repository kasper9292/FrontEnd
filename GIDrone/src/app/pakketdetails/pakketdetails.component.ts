import { Component, OnInit, Input } from '@angular/core';
import { Pakketje } from '../domain/pakketje';
import { DroneService } from '../service/pakket.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pakketdetails',
  templateUrl: './pakketdetails.component.html',
  styleUrls: ['./pakketdetails.component.css']
})
export class PakketdetailsComponent implements OnInit {

  @Input("pakket") pakket: Pakketje;
  @Input("buttonid") btnId: number;

  constructor(private droneservice: DroneService) { }

  ngOnInit() {
  }

  delete(): void {
    this.droneservice.delete(this.pakket.id).subscribe(
      (data: void) => console.log(data),
      (error: HttpErrorResponse) => {
        alert("Er is een fout opgetreden bij het verwijderen van het pakket.\n" + error.status + " " + error)
        console.log("Dit gaat niet goed...");
        console.log(error);

      },
      () => { console.log("Compleet") }
    )
  }

  update(): void {
    this.droneservice.update(this.pakket).subscribe(
      (data: Pakketje) => console.log(data),
      (error: HttpErrorResponse) => {
        console.log("Dit gaat niet goed...");
        console.log(error.message);

      },
      () => { console.log("Compleet") }
    )
  }

}
