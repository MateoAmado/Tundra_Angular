import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './catalogo-lista/producto';

const URL = "https://668f452680b313ba09177cc0.mockapi.io/tundra/productos";

@Injectable({
  providedIn: 'root'
})
export class ProductosDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Producto[]>{

    return this.http.get<Producto[]>(URL);
  }
}
