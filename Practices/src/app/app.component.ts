import { Component } from '@angular/core';
import { Employee } from './employeer.model'; // IMPORTACION DE LA CLASE EMPLEADO

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*REALIZAR REGISTRO DE USUARIO CON RETORNO DE LOS DATOS DEL FORMULARIO EN ONJETOS*/

  titulo = "Practices Recopiratory";

  empleados: Employee[] = [ // DEFINICION DE UN OBJETO DE LA CLASE EMPLEADO

    new Employee("Juan", "Diaz", "Goverment", 9000),
    new Employee("Ryu", "Inuyasha", "Ninja", 5000),
    new Employee("Esther", "Rosevelt", "President", 9900),
    new Employee("Obi Wan", "Kenobi", "Jedi", 1000),


  ];
  /* name: string = "";
  lastname: string = "";
  position: string = "";
  salary: number = 0;
  register: string = "";
  regi = false;*/

  /*constructor() {

    this.name = 

  }

  getRegister(): void {

    this.regi = true;
    this.register = this.name + "\n"  + this.getRegister +"\n"+ this.position + "\n" +this.salary;
    
  }*/

  boxName: string = "";   //LA DEFINICION DE LA VARIABLE A ALMACENAR EN LA DIRECTIVA SE DEBE DE DECLARAR EN ESTE APARTADO "app.component.ts"
  boxLastname: string = "";
  boxPosition: string = "";
  boxSalary: number = 0;

  toString() { //LLAMADO A LA INSTANCIA

    let miEmployee = new Employee(this.boxName, this.boxLastname, this.boxPosition, this.boxSalary);
    this.empleados.push(miEmployee); // INSERCION DEL NUEVO EMPLEADO EN EL ARRAY CON EL METODO PUSH

  }
 





}
