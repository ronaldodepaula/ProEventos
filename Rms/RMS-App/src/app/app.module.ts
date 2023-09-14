import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TabelaDadosComponent } from './tabela-dados/tabela-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    TabelaDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
