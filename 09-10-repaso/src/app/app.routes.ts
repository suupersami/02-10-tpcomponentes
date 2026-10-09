import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {AcercaDe} from './pages/acerca-de/acerca-de';
import {Contacto} from './pages/contacto/contacto'; 
import {Notfound} from './pages/notfound/notfound';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'acercaDe', component: AcercaDe}, 
    { path: 'contacto', component: Contacto },
    { path: '**', component: Notfound },
];
