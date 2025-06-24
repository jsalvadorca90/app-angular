import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludar',
  imports: [FormsModule],
  templateUrl: './saludar.html',
  styleUrl: './saludar.css',
})
export class Saludar {
  saludo = 'Saludo inicial modificado';
}
