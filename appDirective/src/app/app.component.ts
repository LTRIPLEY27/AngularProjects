import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = "";
  email: string = "";
  lastname: string = "";
  message = "";
  register = false;

  getRegister(): void { //LOS VALORES DE LA VARIABLE SE HACEN POSIBLE ASIGNANDOLOS EN EL OBJETO Y LA ETIQUETA HTML CON <BANANA IN BOX> [(ngModel)] y el nombre de la variable
    

    this.register = true;
    //this.message = "user register sucessfully";
    this.message = this.name + " \n " + this.email + "\n" + this.lastname;
    //this.message = this.name;
   // document.getElementById('init').innerHTML += this.message;
    //alert("los datos registrados en sistema son: " + this.name + this.email);
  }
}
