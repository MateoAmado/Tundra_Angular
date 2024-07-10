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
    this._listaCompras.push({... producto});
    
    this.listaCompras.next(this._listaCompras);
  }

  
}
