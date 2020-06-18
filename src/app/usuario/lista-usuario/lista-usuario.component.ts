import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  loading = false;
  users: Usuario[];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.loading = true;
    this.usuarioService.getAll().pipe(first()).subscribe(users => {
        this.loading = false;
        this.users = users;
    });
  }

}
