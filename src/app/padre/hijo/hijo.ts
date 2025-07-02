import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  // !: operador non-null assertion; "mensaje" sreá inicializado posteriormente
  @Input() mensaje!: string;
}
