import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteEnLinea } from './componente-en-linea/componente-en-linea';
import { Interpolacion } from './interpolacion/interpolacion';
import { NuevoComponente } from './nuevo-componente/nuevo-componente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, ComponenteEnLinea, Interpolacion],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected titulo = 'Hola mundo desde Angular';
}
