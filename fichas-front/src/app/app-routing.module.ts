import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichasComponent } from './components/fichas/fichas.component';
import { CrearFichaComponent } from './components/crear-ficha/crear-ficha.component';
import { VerFichaComponent } from './components/ver-ficha/ver-ficha.component';

const routes: Routes = [
  { path: 'fichas', component: FichasComponent },
  { path: '', component: FichasComponent },
  { path: 'crear-ficha', component: CrearFichaComponent },
  { path: 'ver-ficha/:id', component: VerFichaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }