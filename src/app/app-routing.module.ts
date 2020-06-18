import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';
import { FormUsuarioComponent } from './usuario/form-usuario/form-usuario.component';

const routes: Routes = [
  { path: '', component: HomeComponent,  canActivate: [AuthGuard] },
  { path: 'usuarios', component: ListaUsuarioComponent,  canActivate: [AuthGuard] },
  { path: 'usuario/novo', component: FormUsuarioComponent,  canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
