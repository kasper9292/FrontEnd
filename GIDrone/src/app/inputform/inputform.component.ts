import { Component, OnInit, Input } from '@angular/core';
import { Pakketje } from '../domain/pakketje';
import { FormControl, NgControl, Form } from '@angular/forms';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  @Input("form") pakketinfo : string; 

  constructor() { }

  ngOnInit() {
  }

  submit() : void {
    console.log(this.pakketinfo);
  }
}
