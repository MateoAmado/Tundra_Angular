import { Component } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-catalogo-lista',
  templateUrl: './catalogo-lista.component.html',
  styleUrl: './catalogo-lista.component.scss'
})
export class CatalogoListaComponent {

     talles  = ["40", "41", "42"];
     
     catalogo : Producto[] = [
      {
      producto : "https://media2.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatillas-adidas-campus-00s-mujer-negra-10001ehp6396001-1.jpg",
      nombre :"Adidas Campus",
      tipo : "Calzado",
      precio : 60000,
      talles : this.talles,
      oferta : false
     },
     {
      producto : "https://media2.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatillas-adidas-campus-00s-mujer-negra-10001ehp6396001-1.jpg",
      nombre :"Nike Pandas",
      tipo : "Calzado",
      precio : 50000,
      talles : this.talles,
      oferta : true
     },
     {
      producto : "https://media2.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatillas-adidas-campus-00s-mujer-negra-10001ehp6396001-1.jpg",
      nombre :"Nike Jordan",
      tipo : "Calzado",
      precio : 70000,
      talles : this.talles,
      oferta : false
     },
     {
      producto : "https://media2.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatillas-adidas-campus-00s-mujer-negra-10001ehp6396001-1.jpg",
      nombre :"Adidas",
      tipo : "Calzado",
      precio : 90000,
      talles : [],
      oferta : false
     },
    ];

    addToCart(producto: Producto) {
      const selectElement = document.getElementById(`select-${producto.nombre}`) as HTMLSelectElement;
      const selectedTalle = selectElement.value;
      console.log(`Añadir al carrito: Producto - ${producto.nombre}, Talle - ${selectedTalle}`);
      
      // Quitar el talle seleccionado del arreglo de talles del producto
      producto.talles = producto.talles.filter(talle => talle !== selectedTalle);
    }
}
