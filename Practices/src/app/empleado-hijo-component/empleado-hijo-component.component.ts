import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employeer.model';

@Component({
  selector: 'app-empleado-hijo-component',
  templateUrl: './empleado-hijo-component.component.html',
  styleUrls: ['./empleado-hijo-component.component.css']
})
export class EmpleadoHijoComponentComponent implements OnInit {

  @Input() empleadoLista: Employee;

  @Input() indice: number; // DATO QUE RECIBE DEL PADRE CON LA ETIQUETA DEL NOMBRE

  constructor() { }

  ngOnInit(): void {
  }

}
