import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    SobrenosotrosComponent,
    ServiciosComponent,
    NovedadesComponent,
    ContactoComponent,
    InicioComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',redirectTo: 'inicio',pathMatch:'full'},
      {path: '', redirectTo: 'inicio',pathMatch:'full'},
      {path: 'inicio', component: InicioComponent},
      {path: 'servicios', component: ServiciosComponent},
      {path: 'sobrenosotros', component: SobrenosotrosComponent},
      {path: 'novedades', component: NovedadesComponent},
      {path: 'contacto', component: ContactoComponent}
    
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
