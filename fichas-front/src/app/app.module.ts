import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FichasComponent } from './components/fichas/fichas.component';
import { CrearFichaComponent } from './components/crear-ficha/crear-ficha.component';
import { AppRoutingModule } from './app-routing.module';
import { VerFichaComponent } from './components/ver-ficha/ver-ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    FichasComponent,
    CrearFichaComponent,
    VerFichaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
