import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [ //Los componentes que tenemos dentro del modulo
    HeroeComponent,
    ListadoComponent
  ],
  exports: [ //Los componentes que deseamos exportar para que sean visibles desde otras clases
    ListadoComponent
  ],
  imports: [ //Los Modulos que necesitamos para que funcione.
    CommonModule //Sirve para importar las directivas *ngIf - *ngFor, etc.
  ]
})

export class HeroesModule {}
