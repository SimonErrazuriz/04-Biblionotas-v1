import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers: [UsuariosService]
})
export class CrearUsuarioComponent implements OnInit {

  constructor(
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit(): void {
  }

  addUsuario(usuarioForm: NgForm) {
    if (usuarioForm.value.password === usuarioForm.value.confirmPassword) {
      this.usuariosService.addUsuario(usuarioForm.value).subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      );
    } else {
      console.log('Las contraseñas no coinciden')
    }
  }
}
