import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocadoraComponent } from './locadora/locadora.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LocadoraComponent,
    ListaFilmesComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
