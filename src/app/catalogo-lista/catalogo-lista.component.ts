import { Component } from '@angular/core';
import { Producto } from './producto';
import { ProductoCarritoService } from '../producto-carrito.service';
import { ProductosDataService } from '../productos-data.service';

@Component({
  selector: 'app-catalogo-lista',
  templateUrl: './catalogo-lista.component.html',
  styleUrl: './catalogo-lista.component.scss'
})
export class CatalogoListaComponent {

  catalogo: Producto[] = [];

  constructor(private carrito: ProductoCarritoService,
     private productosdata: ProductosDataService){
    
  }

  ngOnInit():void{
    this.productosdata.getAll()
    .subscribe(data => this.catalogo = data); 
  }

  addToCart(producto: Producto, talleElegido: string) {
    const selectElement = document.getElementById(`select-${producto.nombre}`) as HTMLSelectElement | null;
    
    if (selectElement === null) {
      alert('Seleccione un talle para el producto.');
      console.log('Elemento select no encontrado para el producto:', producto.nombre);
      return;
    }
  
    const selectedTalle = selectElement.value;
    
    if (producto.talles[selectedTalle] > 0) {
      producto.talleSeleccionado = talleElegido;
      this.carrito.addToCart(producto);
      console.log(producto);
      producto.talles[selectedTalle] -= 1;
      if (producto.talles[selectedTalle] === 0) {
        delete producto.talles[selectedTalle];
      }
    } else {
      alert(`El talle ${selectedTalle} no está disponible`);
      console.log(`El talle ${selectedTalle} no está disponible`);
    }
  }

  

  getTalles(talles: { [key: string]: number }): string[] {
    return Object.keys(talles);
  }

  trackByNombre(index: number, item: Producto): string {
    return item.nombre;
  }

  getSelectedTalle(productName: string): string {
    const selectElement = document.getElementById(`select-${productName}`) as HTMLSelectElement | null;
    if (selectElement) {
      return selectElement.value;
    }
    return '';
  }

  
  
}
