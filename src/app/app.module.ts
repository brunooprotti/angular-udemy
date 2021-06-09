import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [ // Aca van los COMPONENTES
    AppComponent
  ],
  imports: [ //Aca van los MODULOS
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [], //Aca van los SERVICIOS de un modulo
  bootstrap: [AppComponent] //De aca se dice cual es el componente que se debe cargar primero.
})
export class AppModule { }
