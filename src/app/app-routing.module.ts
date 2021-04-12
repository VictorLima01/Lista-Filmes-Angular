import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { LocadoraComponent } from '../app/locadora/locadora.component';
import { ListaFilmesComponent } from '../app/lista-filmes/lista-filmes.component';

const routes: Routes = [
  { path: 'lista', component: ListaFilmesComponent },
  { path: 'locadora', component: LocadoraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
