import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  numbers : number[] = [0,2,4 ,6,8,10]
  //protected readonly alert = alert;

  nombre : number = 10
  afficher(nombre: number) {
    this.nombre = nombre;
    alert(nombre);
  }
}
