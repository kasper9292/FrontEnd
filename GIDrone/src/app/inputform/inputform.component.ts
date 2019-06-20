import { Component, OnInit, Input } from '@angular/core';
import { Pakketje } from '../domain/pakketje';
import { FormControl, NgControl, Form } from '@angular/forms';
import { format } from 'url';
import { DroneService } from '../service/pakket.service';
import { GeoService } from '../service/geo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  constructor(private droneservice : DroneService, private geoservice : GeoService) { }

  pakket : Pakketje;
  geodata : any;

  ngOnInit() {
  }

  submit(form: any){
    this.pakket = form.value;
    this.geoservice.getCoordinaten(this.pakket.adres, this.pakket.stad).subscribe(
      (data : any) => 
      {this.geodata = data; 
        console.log(data); 
        console.log(this.geodata);
        this.actual_submit();
      },
      (error: HttpErrorResponse) => { 
      console.log("Wow, leef je in de ruimte ofzo?");
      console.log(error.message);

    },
    ()=>{console.log("Compleet")});
  }

  actual_submit(){
    if(this.geodata != null){
      this.pakket.longitude = this.geodata.features[0].geometry.coordinates[0];
      this.pakket.latitude = this.geodata.features[0].geometry.coordinates[1];
      this.droneservice.create(this.pakket).subscribe(
        (data : Pakketje) => 
        {data = this.pakket
        },
        (error: HttpErrorResponse) => { 
        console.log("Oh nee, hè! Gaat het weer fout!");
        console.log(error.message);
      },
      ()=>{console.log("Compleet")});
      console.log(this.pakket);
    }
  }
}
