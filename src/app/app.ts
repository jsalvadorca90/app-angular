import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteEnLinea } from './componente-en-linea/componente-en-linea';
import { Interpolacion } from './interpolacion/interpolacion';
import { NuevoComponente } from './nuevo-componente/nuevo-componente';
import { Padre } from './padre/padre';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NuevoComponente,
    ComponenteEnLinea,
    Interpolacion,
    Padre,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected titulo = 'Universidad Angular';
}
