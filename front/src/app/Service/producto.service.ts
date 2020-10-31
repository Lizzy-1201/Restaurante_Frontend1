import { Injectable } from '@angular/core';
import { Producto } from '../Modelo/Producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  UrlProducto='http://localhost:8080/producto';

  getProductos(){
    return this.http.get<Producto[]>(this.UrlProducto);
  }

  createProducto(producto:Producto){
    return this.http.post<Producto>(this.UrlProducto,producto);
  }

  getProductoId(id:number){
    return this.http.get<Producto>(this.UrlProducto+"/"+id);
  }

  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.UrlProducto+"/"+producto.idproducto,producto);
  }

  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.UrlProducto+"/"+producto.idproducto);
  }
}
