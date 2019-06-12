import { Component, OnInit, Input } from '@angular/core';
import { Pakketje } from '../domain/pakketje';
import { FormControl, NgControl, Form } from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(form: any){
    console.log(form.value);
  }
}
