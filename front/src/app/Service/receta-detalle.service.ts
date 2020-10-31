import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receta_Detalle } from '../Modelo/Receta_Detalle';

@Injectable({
  providedIn: 'root'
})
export class RecetaDetalleService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/receta_detalle';

  getRecetasDetalles(){
    return this.http.get<Receta_Detalle[]>(this.Url);
  }

  createRecetaDetalleProducto(receta_detalle:Receta_Detalle){
    return this.http.post<Receta_Detalle>(this.Url,receta_detalle);
  }

  getRecetaDetalleId(id:number){
    return this.http.get<Receta_Detalle>(this.Url+"/"+id);
  }

  getRecetaDetalleIdProducto(id:number){
    return this.http.get<Receta_Detalle[]>(this.Url+"/listarentrada/"+id);
  }

  getRecetaDetalleIdProducto2(id:number){
    return this.http.get<Receta_Detalle>(this.Url+"/listarsalida/"+id);
  }

  getRecetaDetalleIdProducto3(id:number){
    return this.http.get<Receta_Detalle>(this.Url+"/listarrecetadetalle/"+id);
  }

  updateRecetaDetalle(receta_detalle:Receta_Detalle){
    return this.http.put<Receta_Detalle>(this.Url+"/"+receta_detalle.idrecetadetalle,receta_detalle);
  }

  deleteRecetaDetalle(receta_detalle:Receta_Detalle){
    return this.http.delete<Receta_Detalle>(this.Url+"/"+receta_detalle.idrecetadetalle);
  }
  
}
