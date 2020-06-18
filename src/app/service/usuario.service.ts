import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment.prod';

import { Usuario } from '../model/usuario';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Usuario[]>(`${environment.apiUrl}/usuarios`);
    }
}
