import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  user: Usuario;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loading = true;
    this.user = this.authenticationService.currentUserValue;
  }

}
