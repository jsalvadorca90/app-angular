import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css',
})
export class MostrarMensaje {
  // mensaje de tipo String  a cadena vacía
  mensaje: String = '';
  mostrarMensaje() {
    this.mensaje = '¡Hola, has hecho click en el botón!';
  }
  resetearMensaje() {
    // limpia div
    this.mensaje = '';
  }
}
