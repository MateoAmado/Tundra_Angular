import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo-lista',
  templateUrl: './catalogo-lista.component.html',
  styleUrl: './catalogo-lista.component.scss'
})
export class CatalogoListaComponent {

     talles  = [40, 41, 42];
     
     catalogo = {
      "Producto" : "https://media2.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatillas-adidas-campus-00s-mujer-negra-10001ehp6396001-1.jpg",
      "Nombre":"Adidas Campus",
      "Tipo" : "Calzado",
      "Precio" : "$60000",
      "Talle" : this.talles
     }


}
