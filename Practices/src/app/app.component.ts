import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  titulo = "Practices Recopiratory";
  name: string = "";
  lastname: string = "";
  position: string = "";
  salary: number = 0;
  register: string = "";
  regi = false;

  getRegister(): void {

    this.regi = true;
    this.register = "Nombre: " + this.name + "\n" +
      "  Apellido: " + this.getRegister +"\n"+
      "  Cargo : " + this.position + "\n" +
      "  Salario: " + this.salary;
    
  }





}
