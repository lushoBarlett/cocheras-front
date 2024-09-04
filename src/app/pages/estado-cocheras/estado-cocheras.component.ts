import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-estado-cocheras',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './estado-cocheras.component.html',
  styleUrl: './estado-cocheras.component.scss'
})

export class EstadoCocherasComponent {
  titulo: string = 'Estado de la cochera';
  header: { nro: string, disponibilidad: string, ingreso: string, acciones: string } = {
    nro: 'Nro',
    disponibilidad: 'Disponibilidad',
    ingreso: 'Ingreso',
    acciones: 'Acciones',
  };
  filas: { nro: number, disponibilidad: boolean, ingreso: string, acciones: string }[] = [];
  siguienteNumero: number = 1;
  agregarFila() {
    this.filas.push({
      nro: this.siguienteNumero,
      disponibilidad: true,
      ingreso: new Date().toLocaleTimeString(),
      acciones: '-'
    });
    this.siguienteNumero += 1;
  }
}
