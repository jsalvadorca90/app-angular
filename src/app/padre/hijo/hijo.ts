import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  // !: operador non-null assertion; "mensaje" sreá inicializado posteriormente
  // @Input() mensaje!: string;
  // @Output() notificarPadre = new EventEmitter<string>();

  // enviarMensaje() {
  //   // Emitir el evento con un mensaje[se emite una cadena string]
  //   this.notificarPadre.emit('Mensaje desde el componente hijo   al padre');
  // }
  mensaje: string = 'Mensaje desde el componente hijo';

  cambiarMensaje(nuevoMensaje: string) {
    this.mensaje = nuevoMensaje;
  }
}
