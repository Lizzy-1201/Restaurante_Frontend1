import { Injectable } from '@angular/core';
import { Proveedor } from '../Modelo/Proveedor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }

  UrlProveedor='http://localhost:8080/proveedor';

  getProveedores(){
    return this.http.get<Proveedor[]>(this.UrlProveedor);
  }

  createProveedor(proveedor:Proveedor){
    return this.http.post<Proveedor>(this.UrlProveedor,proveedor);
  }

  getProveedorId(id:number){
    return this.http.get<Proveedor>(this.UrlProveedor+"/"+id);
  }

  updateProveedor(proveedor:Proveedor){
    return this.http.put<Proveedor>(this.UrlProveedor+"/"+proveedor.idproveedor,proveedor);
  }

  deleteProveedor(proveedor:Proveedor){
    return this.http.delete<Proveedor>(this.UrlProveedor+"/"+proveedor.idproveedor);
  }

}
