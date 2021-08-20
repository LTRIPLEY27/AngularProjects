import { Component } from "@angular/core";

@Component({ //EN ESTE AMBITO (DENTRO DEL PARENTESIS Y LA LLAVE) DEBERA DE CONTENER NUESTRO CODIGO

  selector: "app-empleados", //LA SEPARACION SE HACE CON COMAS
  templateUrl: "./empleados.component.html",// EL TEMPLATE HA DE APUNTAR AL ARCHIVO HTML Y CON LA RUTA ABOSULUTA PUES ES UNA CARPETA CONTENIDA Y SE HA DE DIRECCIONAR CORRECTAMENTE
  styleUrls: ["./empleados.component.css"] // EL STYLE Y LA DIRECCION ES OPCIONAL

})

export class EmpleadosComponent { // CLASE DEL COMPONENTE NUEVO

  nombre = "juan";
}
