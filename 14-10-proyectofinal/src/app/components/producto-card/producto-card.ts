
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../models/interface/interface';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css',
})
export class ProductoCard {
  @Input () productos!:Producto

  @Input() cardAbierta = false;

  @Output() voto = new EventEmitter<'like' | 'dislike'>();
  @Output() cambiarDescripcion = new EventEmitter<void>();

  verDescripcion(): void {
    this.cambiarDescripcion.emit();
  }

  darMeGusta(): void {
    this.voto.emit('like');
  }

  darNoMeGusta(): void {
    this.voto.emit('dislike');
  }
}
