import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocadoraComponent } from './locadora/locadora.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
/*
  Para aceitar url unsafed
*/
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { GridCssComponent } from './grid-css/grid-css.component';
import { HeaderComponent } from './header/header.component';

/*
Mascará
*/
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from "ng2-currency-mask";

/*
  Toast
*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LocadoraComponent,
    ListaFilmesComponent,
    SafeUrlPipe,
    GridCssComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
