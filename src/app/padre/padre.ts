import { Component } from '@angular/core';
import { Hijo } from './hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  // mensajePadre: string = 'Mensaje desde el componente padre';
  mensaje: string = '';

  // Se emitió una cadena[string], es lo que vamos a recibir del componente hijo
  recibirNotificacion(mensajeHijo: string) {
    this.mensaje = mensajeHijo;
  }
}
