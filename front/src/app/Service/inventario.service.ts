import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inventario } from '../Modelo/Inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  inventarios:Inventario[];
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/inventario';

  getInventarios(){
    return this.http.get<Inventario[]>(this.Url);
  }

  createInventarioTienda(inventario:Inventario){
    return this.http.post<Inventario>(this.Url,inventario);
  }

  getInventarioId(idtienda:number, idproducto:number){
    
    return this.http.get<Inventario>(this.Url+"/obtenerinventario/"+idtienda+"/"+idproducto);
  }

  getInventarioIdTienda(id:number){
    return this.http.get<Inventario[]>(this.Url+"/listartienda/"+id);
  }

  getInventarioIdEmpleado(id:number){
    return this.http.get<Inventario[]>(this.Url+"/listarempleado/"+id);
  }

  updateInventario(inventario:Inventario){
    return this.http.put<Inventario>(this.Url+"/"+inventario.idtienda+"/"+inventario.idproducto,inventario);
  }

  deleteInventario(inventario:Inventario){
    return this.http.delete<Inventario>(this.Url+"/"+inventario.idtienda+"/"+inventario.idproducto);
  }

}
