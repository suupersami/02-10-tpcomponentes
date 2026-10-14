
//2. importaciones y exportaciones
import { Routes } from '@angular/router';
import {Inicio} from './pages/inicio/inicio';
import{Productos} from './pages/productos/productos';
import{AcercaDe} from './pages/acerca-de/acerca-de';
import{Contacto} from './pages/contacto/contacto';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {path:'', component: Inicio},
    {path: 'productos', component: Productos},
    {path: 'acerca-de', component: AcercaDe},
    {path: 'contacto', component:Contacto },
    {path: '**', component: NotFound},
];
