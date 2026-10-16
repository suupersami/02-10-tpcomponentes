import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  productos = [
    {
      titulo: 'TON 618',
      imagen: '/TON618.jpeg',
      descripcion:'TON 618 es uno de los agujeros negros supermasivos más colosales del universo observable, catalogado como un cuásar hiperluminoso. Contiene una masa equivalente a 66.000 millones de soles y su horizonte de sucesos es tan inmenso que podría albergar 40 sistemas solares completos uno al lado del otro. Brilla con la fuerza de 140 billones de estrellas, eclipsando a su propia galaxia desde una distancia de 10.400 millones de años luz.'
    },
    {
      titulo: '55 Cancri e',
      imagen: '/55cancri.webp'
    },
    {
      titulo: 'Monte Olimpo',
      imagen: '/monte-olimpo-card.webp'
    },
    {
      titulo: 'Supernova',
      imagen: '/supernova.jpg'
    },

    {
      titulo:'Galaxia de Andrómeda',
      imagen:'/andromeda.card.jpg'
    },
    {
      titulo:'Kepler-16b',
      imagen:'/kepler.card.jpg'
    },
    {
      titulo:'J1407b El "Súper Saturno"',
      imagen:'/el Super Saturno.card.jpg'
    },
    {
      titulo:'Galaxia de la Medusa (ESO 137-001)',
      imagen:'/galaxiadelamedusa.card.jfif'
    }
  ];
}
