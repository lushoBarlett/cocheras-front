import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DatosLogin } from '../../interfaces/login';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  datosLogin: DatosLogin = {
    username: '',
    password: ''
  };

  router = inject(Router);
  auth = inject(AuthService);

  iniciarSesion() {
    this.auth
      .login(this.datosLogin)
      .then(ok => {
        if (ok)
          this.router.navigate(['/estado-cocheras']);
        else
          alert('Usuario o contraseña incorrectos');
      });
  }
}
