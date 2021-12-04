import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { FichasComponent } from './components/fichas/fichas.component';
import { CrearFichaComponent } from './components/crear-ficha/crear-ficha.component';
import { AppRoutingModule } from './app-routing.module';
import { VerFichaComponent } from './components/ver-ficha/ver-ficha.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FichasComponent,
    CrearFichaComponent,
    VerFichaComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
