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

  habilitarCuadro = false; // VARIABLE CON BINDING

  userRegis = false;
  textoRegistro = "NOBODY REGISTER YET";

  getRegistroUsuario() { //FUNCION PARA VERIFICAR LA PROPIEDAD "userRegis" DEL BINDING, EN EL INPUT
    this.userRegis = false;
  }

  /*
                EVENT BINDING


  
  */
              //USO DEL OBJETO CREADO EN EL EVENTO COMO PARAMETRO, SE DEBE DE IDENTIFICAR : NOMBRE DEL PARAMETRO Y TIPO EJM: "event:Event"
  showmeRegister(event:Event) { //FUNCION DEL EVENTO SOBRE EL CHECKBOX
    //alert("user register"); // LAS FUNCIONES DE JAVASCRIPT FUNCIONAN PARECIDO AL TYPESCRIPT
    //this.textoRegistro = "User Registred Sucesfully";
    //alert(event.target);

    // EL LLAMADO AL OBJETO "EVENT" PARA USO DEL IF, SE DEBE DE EJECUTAR DENTRO DE UNA ETIQUETA PARA RECOGER LOS VALORES
    if ((<HTMLInputElement> event.target).value == "si") { // EL CONDICIONAL DEL IF ESTA CASTEANDO EL OBJETO PARA OBTENER EL VALUE
      this.textoRegistro = "Just Register";
    } else {
      this.textoRegistro = "Nobody register yet";
    }
  }

  //empresa = "hola, que tal";

 // llamada(value: String) {} // CREACION DE LA FUNCION DEL EVENTO CARGA DEL VALOR DE LA VARIABLE

  constructor() { }

  ngOnInit(): void {
  }

}
