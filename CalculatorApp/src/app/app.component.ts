import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Firts Calculator on Angular';
  num1: number = 0; // INICIAMOS LA VARIABLE "NUM1!, DEL TIPO "NUMBER" E INICIAMOS EN "0"
  num2: number = 0;
  resultado: number = 0;

  sum():void {  // LA DECLARACION DE LOS METODOS EN LA CLASE RAIZ SE DEBE DE REALIZAR DE ESTA MANERA, ESPECIFICANDO EL TIPO DE MEDOTO Y SIGUIENDO LA SINTAXIS, EN ESTE CASO ES SERA UN VOID PUES NO NOS RETORNANA EL VALOR

    this.resultado = this.num1 + this.num2;
   // document.getElementById('result').innerHTML += this.resultado;

    alert(this.resultado);
  }

  rest(): void {
    this.resultado = this.num1 - this.num2;
  }
}
