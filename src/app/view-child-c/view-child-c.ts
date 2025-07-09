import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-c',
  imports: [],
  templateUrl: './view-child-c.html',
  styleUrl: './view-child-c.css',
})
export class ViewChildC {
  @ViewChild('referenciaInput') inputElemento!: ElementRef;

  cambiarTexto() {
    this.inputElemento.nativeElement.value = 'Texto Cambiado';
  }
}
