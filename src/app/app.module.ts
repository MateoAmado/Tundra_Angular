import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoListaComponent } from './catalogo-lista/catalogo-lista.component';
import { TundraSobreNosotrosComponent } from './tundra-sobre-nosotros/tundra-sobre-nosotros.component';
import { TundraProductosComponent } from './tundra-productos/tundra-productos.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoListaComponent,
    TundraSobreNosotrosComponent,
    TundraProductosComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
