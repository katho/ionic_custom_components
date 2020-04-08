import { Component, OnInit } from '@angular/core';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  // tslint:disable-next-line: max-line-length
  personajes = ['Mujer Maravilla', 'Batman', 'Superman', 'Cyborg', 'Flecha Verde', 'El Marciano', 'Flash', 'Tornado Rojo', 'Linterna Verde'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event)
  {
    //console.log(event);
    //Esto en UI cambia el orden de los elementos, en memoria quedan como originalmete se establecen
    event.detail.complete();
    //Esto mueve los elementos en memoria para que hagan match con UI
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
  }

  onClick()
  {
    //Mostrar lo que pasa en memoria
    console.log(this.personajes);
  }

}
