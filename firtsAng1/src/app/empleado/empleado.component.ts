import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //styleUrls: ['./empleado.component.css']
  styles: ["p {background-color: red;}"]

})

  /*
   * EN EL ESPACION DE LA CLASE ES DONDE GUARDAREMOS CUALQUIER CODIGO REFERENTE A LA CLASE
   */
export class EmpleadoComponent implements OnInit {

  nombre = "Juan"; // DECLARACION DE PROPIEDADES PARA USO DE LA INTERPOLACION

  apellido = "Clazadilla";

  edad = 34;

  //empresa = "hola, que tal";

 // llamada(value: String) {} // CREACION DE LA FUNCION DEL EVENTO CARGA DEL VALOR DE LA VARIABLE

  constructor() { }

  ngOnInit(): void {
  }

}
