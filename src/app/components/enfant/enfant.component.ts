import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {
  @Input() // Prépare à récupérer une information d'un composant parent
  number: number = 0; // 0 valeur par défaut

  @Output() // Prépare à notifier un parent d'un changement interne
  numberChange: EventEmitter<number> = new EventEmitter<number>()

  // Input et Output peuvent aussi bien coexister, qu'être présent indépendamment, et même en plusieurs nombres


  incrementNumber() {
    this.number++;
    this.numberChange.emit(this.number);
  }
}
