import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent // ACA DEBEMOS DE REGISTRAR CADA MOSULO QUE CREEMOS SEPARADOS POR COMAS PARA DISPARARLO
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // INSERCION DE LA FORMSMODULE PARA USO DE LA DIRECTIVA "ngModule" en el binding bidireccional
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
