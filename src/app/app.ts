import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgregarTarea } from './agregar-tarea/agregar-tarea';
import { ComponenteEnLinea } from './componente-en-linea/componente-en-linea';
import { ComponenteFor } from './componente-for/componente-for';
import { ComponenteIf } from './componente-if/componente-if';
import { Hijo } from './hijo/hijo';
import { Interpolacion } from './interpolacion/interpolacion';
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { NuevoComponente } from './nuevo-componente/nuevo-componente';
import { Padre } from './padre/padre';
import { Replicador } from './replicador/replicador';
import { Saludar } from './saludar/saludar';
// import { Padre } from './padre/hijo/hijo';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NuevoComponente,
    ComponenteEnLinea,
    Interpolacion,
    Padre,
    Hijo,
    MostrarMensaje,
    Replicador,
    Saludar,
    ComponenteIf,
    AgregarTarea,
    ComponenteFor,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected titulo = 'Directiva @for en Angular';
  // protected titulo = 'Local reference en Angular';
  // protected titulo = 'Directiva @if en Angular';
  // protected titulo = 'Two-Way Binding en Angular';
  // protected titulo = 'Property Binding en Angular';
  // protected titulo = 'Universidad Angular';
}
