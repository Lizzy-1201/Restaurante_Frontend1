import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receta } from '../Modelo/Receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/receta';

  getRecetas(){
    return this.http.get<Receta[]>(this.Url);
  }

  createReceta(receta:Receta){
    return this.http.post<Receta>(this.Url,receta);
  }

  getRecetaId(id:number){
    return this.http.get<Receta>(this.Url+"/"+id);
  }

  getRecetaIdProducto(id:number){
    return this.http.get<Receta[]>(this.Url+"/listarreceta/"+id);
  }

  updateReceta(receta:Receta){
    return this.http.put<Receta>(this.Url+"/"+receta.idproductosalida,receta);
  }

  deleteReceta(receta:Receta){
    return this.http.delete<Receta>(this.Url+"/"+receta.idproductosalida);
  }

}
