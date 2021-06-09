import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes      : string[] = ['Spiderman', 'Ironman', 'Hulk','Thor'];
  heroeBorrado: string   = '';
  heroeFlag   : boolean  = false;

  constructor() { } //Se ejecuta antes de que se renderize el componente.

  ngOnInit(): void { //Se utiliza para inicializar cosas, peticiones a servicios, se trae informacion
  }

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    this.heroeFlag    = true;
  }
}
