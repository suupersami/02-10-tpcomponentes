
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css',
})
export class ProductoCard {
  @Input() titulo = '';
  @Input() imagen = '';
  @Input() descripcion = '';
  @Input() likes = 0;
  @Input() dislikes = 0;

  @Output() voto = new EventEmitter<'like' | 'dislike'>();

  cardAbierta = false;

  verDescripcion(): void {
    this.cardAbierta = !this.cardAbierta;
  }

  darMeGusta(): void {
    this.voto.emit('like');
  }

  darNoMeGusta(): void {
    this.voto.emit('dislike');
  }
}
