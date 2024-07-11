import { Component } from '@angular/core';
import { Producto } from './producto';
import { ProductoCarritoService } from '../producto-carrito.service';

@Component({
  selector: 'app-catalogo-lista',
  templateUrl: './catalogo-lista.component.html',
  styleUrl: './catalogo-lista.component.scss'
})
export class CatalogoListaComponent {

  catalogo: Producto[] = [
    {
      producto: "https://media2.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatillas-adidas-campus-00s-mujer-negra-10001ehp6396001-1.jpg",
      nombre: "Adidas Campus",
      tipo: "Calzado",
      precio: 60000,
      talles: { "40": 5, "41": 3, "42": 2 },
      oferta: false,
      talleSeleccionado: "",
      cantidad: 0
    },
    {
      producto: "https://media2.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatillas-adidas-campus-00s-mujer-negra-10001ehp6396001-1.jpg",
      nombre: "Nike Pandas",
      tipo: "Calzado",
      precio: 50000,
      talles: { "40": 4, "41": 2, "42": 1 },
      oferta: true,
      talleSeleccionado: "",
      cantidad: 0
    },
    {
      producto: "https://media2.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatillas-adidas-campus-00s-mujer-negra-10001ehp6396001-1.jpg",
      nombre: "Nike Jordan",
      tipo: "Calzado",
      precio: 70000,
      talles: { "40": 3, "41": 1, "42": 5 },
      oferta: false,
      talleSeleccionado: "",
      cantidad: 0
    },
    {
      producto: "https://media2.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatillas-adidas-campus-00s-mujer-negra-10001ehp6396001-1.jpg",
      nombre: "Adidas",
      tipo: "Calzado",
      precio: 90000,
      talles: {},
      oferta: false,
      talleSeleccionado: "",
      cantidad: 0
    },
  ];

  constructor(private carrito: ProductoCarritoService){
    
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
