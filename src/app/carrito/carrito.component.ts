import { Component } from '@angular/core';
import { ProductoCarritoService } from '../producto-carrito.service';
import { Producto } from '../catalogo-lista/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  listaCompras: Producto[] | undefined;
  constructor(private carrito: ProductoCarritoService){
    carrito.listaCompras.subscribe(c => this.listaCompras = c);
  }
}
