import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cochera } from '../../interfaces/cochera';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-estado-cocheras',
  standalone: true,
  imports: [RouterModule,CommonModule,HeaderComponent],
  templateUrl: './estado-cocheras.component.html',
  styleUrl: './estado-cocheras.component.scss'
})

export class EstadoCocherasComponent {
  titulo: string = 'Estado de la cochera';

  filas: Cochera[] = [];

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

  /** Elimina la fila de la cochera seleccionada */
  eliminarFila(numeroFila: number){
    this.filas.splice(numeroFila,1);
  }

  /** Cambia la disponibilidad de una cochera, si está habilitada se deshabilita y viceversa */
  cambiarDisponibilidadCochera(numeroFila: number){
    // Manera larga
    /*
    if(this.filas[numeroFila].disponibilidad === true){
      this.filas[numeroFila].disponibilidad = false;
    } else {
      this.filas[numeroFila].disponibilidad = true;
    }
    */
   //Manera corta
   this.filas[numeroFila].disponibilidad = !this.filas[numeroFila].disponibilidad;
  }
}
