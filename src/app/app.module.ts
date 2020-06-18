import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './guard/fake-backend';




import {  ErrorInterceptor } from './guard/error.interceptor';
import { JwtInterceptor} from './guard/jwt.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';
import { FormUsuarioComponent } from './usuario/form-usuario/form-usuario.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListaUsuarioComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
