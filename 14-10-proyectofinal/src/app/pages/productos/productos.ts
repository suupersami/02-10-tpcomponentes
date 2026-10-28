
import { Component } from '@angular/core';
import { ProductoCard } from '../../components/producto-card/producto-card';
import { Producto } from '../../models/interface/interface';



@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ProductoCard],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  registrarVoto(
  producto: Producto,
  tipo: 'like' | 'dislike'
): void {
  if (tipo === 'like') {
    producto.likes++;
  } else {
    producto.dislikes++;
  }
}

  cardAbierta: string | null = null;

  verDescripcion(titulo: string): void {
    this.cardAbierta =
      this.cardAbierta === titulo ? null : titulo;
  }

  darMeGusta(producto: Producto): void {
    producto.likes++;
  }

  darNoMeGusta(producto: Producto): void {
    producto.dislikes++;
  }

  productos: Producto[] = [
    {
      titulo: 'TON 618',
      imagen: '/TON618.jpeg',
      descripcion: 'Es uno de los agujeros negros supermasivos más colosales del universo observable, catalogado como un cuásar hiperluminoso. Contiene una masa equivalente a 66.000 millones de soles y su horizonte de sucesos es tan inmenso que podría albergar 40 sistemas solares completos uno al lado del otro. Brilla con la fuerza de 140 billones de estrellas, eclipsando a su propia galaxia desde una distancia de 10.400 millones de años luz.',
      likes: 0,
      dislikes: 0
    },
    {
      titulo: '55 Cancri e',
      imagen: '/55cancri.webp',
      descripcion: 'Es una supertierra rocosa situada a 41 años luz de nosotros que destaca por sus condiciones extremas: un año son solo 18 horas debido a su cercanía a su estrella, lo que eleva su temperatura a más de 2,000 °C, creando un mundo cubierto por un océano de lava. Investigaciones científicas sugieren que este exoplaneta es rico en carbono, lo que bajo su inmensa presión podría hacer que una parte significativa de su interior esté compuesta de diamante.',
      likes: 0,
      dislikes: 0
    },
    {
      titulo: 'Monte Olimpo',
      imagen: '/monte-olimpo-card.webp',
      descripcion: 'Es un gigantesco volcán ubicado en Marte y tiene el título de la montaña más alta de todo el sistema solar. Tiene una altitud de entre 22 y 25 kilómetros, lo que equivale a casi tres veces la altura del Monte Everest. Su base mide aproximadamente 600 kilómetros de diámetro, pero sus pendientes son tan suaves y graduales que alguien situado en la base no podría ver la cima debido a la propia curvatura del planeta.',
      likes: 0,
      dislikes: 0
    },
    {
      titulo: 'Supernova',
      imagen: '/supernova.jpg',
      descripcion: 'Es la explosión estelar más grande y poderosa del universo. Ocurre durante la etapa final de la vida de ciertas estrellas, liberando en un instante una cantidad descomunal de energía equivalente a miles de millones de bombas atómicas. Durante días o meses, el destello de una sola supernova puede llegar a eclipsar el brillo de una galaxia entera.',
      likes: 0,
      dislikes: 0
    },
    {
      titulo: 'Galaxia de Andrómeda',
      imagen: '/andromeda.card.jpg',
      descripcion: 'Es una gigantesca galaxia espiral situada a unos 2.5 millones de años luz de la Tierra, lo que la convierte en el objeto más lejano visible a simple vista. Es la vecina grande más cercana a la Vía Láctea, con un diámetro de 220,000 años luz y aproximadamente un billón de estrellas; debido a la gravedad, ambas galaxias se acercan rápidamente y se calcula que colisionarán y se fusionarán dentro de unos 4,000 millones de años.',
      likes: 0,
      dislikes: 0
    },
    {
      titulo: 'Kepler-16b',
      imagen: '/kepler.card.jpg',
      descripcion: 'Es el primer exoplaneta circumbinario confirmado por la NASA, lo que significa que orbita alrededor de dos estrellas a la vez. Descubierto en 2011 a unos 200 años luz de la Tierra, tiene un tamaño similar al de Saturno y tarda 229 días en completar una órbita alrededor de sus estrellas (una enana naranja y una roja más pequeña). En superficie se pueden ver puestas de sol dobles, pero sus temperaturas gélidas de entre -70 °C y -100 °C lo hacen inhabitable.',
      likes: 0,
      dislikes: 0
    },
    {
      titulo: 'J1407b El "Súper Saturno"',
      imagen: '/el Super Saturno.card.jpg',
      descripcion: 'A unos 430 años luz de la Tierra, destaca por poseer un sistema de 37 anillos que abarca unos 120 millones de kilómetros de ancho, una estructura casi 200 veces más grande que la de Saturno. Con una masa estimada de entre 10 y 40 veces la de Júpiter, los científicos aún debaten si se trata de un gigante gaseoso o de una enana marrón, orbitando una estrella muy joven dentro que se encuentra formando exolunas entre sus anillos.',
      likes: 0,
      dislikes: 0
    },
    {
      titulo: 'Galaxia de la Medusa',
      imagen: '/galaxiadelamedusa.card.jfif',
      descripcion: 'Es una galaxia espiral barrada situada a unos 220 millones de años luz de la Tierra, en la constelación de Triangulum Australe. Su rasgo más impresionante son los largos "tentáculos" azules de gas y estrellas jóvenes que se extienden a lo largo de 260,000 años luz, dándole el aspecto del animal marino. Esta peculiar silueta se debe a un fenómeno violento llamado ram pressure stripping (extracción por presión de ariete).',
      likes: 0,
      dislikes: 0
    }
  ];
}
