import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-caracter-empleado-c',
  templateUrl: './caracter-empleado-c.component.html',
  styleUrls: ['./caracter-empleado-c.component.css']
})
export class CaracterEmpleadoCComponent implements OnInit {

  @Output() caracterEmpleado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
