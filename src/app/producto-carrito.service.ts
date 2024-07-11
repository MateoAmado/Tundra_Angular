import { Injectable } from '@angular/core';
import { Producto } from './catalogo-lista/producto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoCarritoService {

  private _listaCompras: Producto[] = [];
  listaCompras: BehaviorSubject<Producto[]> = new BehaviorSubject(this._listaCompras);

  constructor() { }

  addToCart(producto: Producto) {
    if(!this.containsTalle(producto)){
      producto.cantidad = 1;
      this._listaCompras.push({...producto});
    } else {
      let producto_aux = this.getProducto(producto);
      if (producto_aux) {
        producto_aux.cantidad += 1;
      }
    }
    this.listaCompras.next(this._listaCompras);
  }
  
  containsTalle(producto_aux: Producto): boolean {
    return this._listaCompras.some(producto => 
      producto.nombre === producto_aux.nombre && producto.talleSeleccionado === producto_aux.talleSeleccionado
    );
  }
  
  getProducto(producto_aux: Producto): Producto | undefined {
    return this._listaCompras.find(producto => 
      producto.nombre === producto_aux.nombre && producto.talleSeleccionado === producto_aux.talleSeleccionado
    );
  }

  
}
