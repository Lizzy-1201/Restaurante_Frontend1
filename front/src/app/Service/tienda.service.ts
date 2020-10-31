import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tienda } from '../Modelo/Tienda';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http:HttpClient) { }

  UrlTienda='http://localhost:8080/tienda';

  getTiendas(){
    return this.http.get<Tienda[]>(this.UrlTienda);
  }

  createTienda(tienda:Tienda){
    return this.http.post<Tienda>(this.UrlTienda,tienda);
  }

  getTiendaId(id:number){
    return this.http.get<Tienda>(this.UrlTienda+"/"+id);
  }

  updateTienda(tienda:Tienda){
    return this.http.put<Tienda>(this.UrlTienda+"/"+tienda.idtienda,tienda);
  }

  deleteTienda(tienda:Tienda){
    return this.http.delete<Tienda>(this.UrlTienda+"/"+tienda.idtienda);
  }
}
