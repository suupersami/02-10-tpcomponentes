import { Component, signal } from '@angular/core';
import { ProductoCard } from './components/producto-card/pokemon-card';
import { FormsModule } from '@angular/forms';
import { Pokemon } from './models/interface/interface';




// URL base de las imágenes oficiales de Pokémon
const SPRITE = 'https://raw.githubusercontent.com/'
+ 'PokeAPI/sprites/master/sprites/pokemon';

@Component({
  imports: [ProductoCard, FormsModule,],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  pokemons: Pokemon[] = [
{ id:1, nombre:'Bulbasaur',
imagen: SPRITE+'/1.png',
tipos:['grass','poison'], altura:7, peso:69 },
{ id:4, nombre:'Charmander',
imagen: SPRITE+'/4.png',
tipos:['fire'], altura:6, peso:85 },
{ id:7, nombre:'Squirtle',
imagen: SPRITE+'/7.png',
tipos:['water'], altura:5, peso:90 },
{ id:25, nombre:'Pikachu',
imagen: SPRITE+'/25.png',
tipos:['electric'], altura:4, peso:60 },
{ id:39, nombre:'Jigglypuff',
imagen: SPRITE+'/39.png',
tipos:['normal','fairy'], altura:5, peso:55 },
{ id:52, nombre:'Meowth',
imagen: SPRITE+'/52.png',
tipos:['normal'], altura:4, peso:42 },
{ id:94, nombre:'Gengar',
imagen: SPRITE+'/94.png',
tipos:['ghost','poison'], altura:15, peso:405 },
{ id:133, nombre:'Eevee',
imagen: SPRITE+'/133.png',
tipos:['normal'], altura:3, peso:65 },
];
favoritos: Pokemon[] = [];
busqueda = '';
get pokemonsFiltrados(): Pokemon[] {
  const texto = this.busqueda.toLowerCase().trim();
  return this.pokemons.filter(pokemon =>
    pokemon.nombre.toLowerCase().includes(texto)
  )

}
onFavoritoToggled(pokemon: Pokemon): void {
  const yaEsta=this.favoritos.find(f => f.id === pokemon.id);
  if (yaEsta) {
    this.favoritos = this.favoritos.filter(f => f.id !== pokemon.id);
  }else{
    this.favoritos = [...this.favoritos, pokemon];
  }
}
}
