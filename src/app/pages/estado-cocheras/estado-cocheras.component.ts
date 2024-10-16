import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cochera } from '../../interfaces/cochera';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { AuthService } from '../../services/auth.service';
import { CocherasService } from '../../services/cocheras.service';
import { Estacionamiento } from '../../interfaces/estacionamiento';
import { EstacionamientosService } from '../../services/estacionamientos.service';

@Component({
  selector: 'app-estado-cocheras',
  standalone: true,
  imports: [RouterModule,CommonModule,HeaderComponent],
  templateUrl: './estado-cocheras.component.html',
  styleUrl: './estado-cocheras.component.scss'
})

export class EstadoCocherasComponent {
  titulo: string = 'Estado de la cochera';

  filas: (Cochera & { activo: Estacionamiento|null })[] = [];

  siguienteNumero: number = 1;

  auth = inject(AuthService);
  cocheras = inject(CocherasService);
  estacionamientos = inject(EstacionamientosService);

  ngOnInit() {
    this.traerCocheras();
  }

  traerCocheras() {
    return this.cocheras.cocheras().then(cocheras => {
      this.filas = [];

      for (let cochera of cocheras) {
        this.estacionamientos.buscarEstacionamientoActivo(cochera.id).then(estacionamiento => {
          this.filas.push({
            ...cochera,
            activo: estacionamiento,
          });
        })
      };
    });
  }

  agregarFila() {
    // TODO: implementar
  }

  /** Elimina la fila de la cochera seleccionada */
  eliminarFila(cocheraId: number) {
    // TODO: implementar
  }

  /** Cambia la disponibilidad de una cochera, si está habilitada se deshabilita y viceversa */
  cambiarDisponibilidadCochera(cocheraId: number) {
    // TODO: implementar
  }
}
