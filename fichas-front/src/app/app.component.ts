import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuariosService],
})
export class AppComponent {

  constructor(
    private usuariosService: UsuariosService) { }

  logOut() {
    this.usuariosService.logOut();
  }
}
