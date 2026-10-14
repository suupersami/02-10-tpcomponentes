import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Inicio } from './pages/inicio/inicio';

@Component({
  imports: [RouterOutlet,RouterLink,RouterLinkActive,Navbar,Footer,Inicio],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
