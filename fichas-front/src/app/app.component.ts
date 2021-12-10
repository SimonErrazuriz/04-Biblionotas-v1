import { Component, DoCheck } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuariosService],
})
export class AppComponent implements DoCheck {
  public identificado: boolean = false;
  public usuario!: any;

  constructor(
    private usuariosService: UsuariosService) { }

  ngDoCheck() {
    if (this.usuariosService.loggedIn()) {
      this.identificado = true
    } else {
      this.identificado = false;
    }
  }

  logOut() {
    this.usuariosService.logOut();
  }
}
