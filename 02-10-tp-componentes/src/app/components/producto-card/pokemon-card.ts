import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Pokemon } from '../../models/interface/interface';
@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './pokemon-card.css',
  templateUrl: './pokemon-card.html',
})
export class ProductoCard {
  @Input() pokemon!: Pokemon
  @Output() favoritoToggled = new EventEmitter<Pokemon>()

  onFavoritoToggled(): void {
    this.favoritoToggled.emit(this.pokemon);
  }
  
}
