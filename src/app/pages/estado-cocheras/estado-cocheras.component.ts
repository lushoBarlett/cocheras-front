import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cochera } from '../../interfaces/cochera';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { AuthService } from '../../services/auth.service';

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

  auth = inject(AuthService);

  ngOnInit() {
    this.reload().then(filas => {
      this.filas = filas;
    });
  }

  reload() {
    return fetch('http://localhost:4000/cocheras', {
      headers: {
        'Authorization': 'Bearer ' + this.auth.getToken(),
      },
    })
    .then(r => r.json())
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
