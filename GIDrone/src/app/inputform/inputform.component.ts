import { Component, OnInit, Input } from '@angular/core';
import { Pakketje } from '../domain/pakketje';
import { FormControl, NgControl, Form } from '@angular/forms';
import { format } from 'url';
import { DroneService } from '../service/pakket.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  constructor(private droneservice : DroneService) { }

  pakket : Pakketje;

  ngOnInit() {
  }

  submit(form: any){
    this.pakket = form.value;
    this.droneservice.create(this.pakket).subscribe(
      (data : Pakketje) => 
      {data = this.pakket
      },
      (error: HttpErrorResponse) => { 
      console.log("Oh nee, hè! Gaat het weer fout!");
      console.log(error.message);
      
    },
    ()=>{console.log("Compleet")});
  }s
}
