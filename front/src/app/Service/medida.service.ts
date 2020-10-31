import { Injectable } from '@angular/core';
import { Medida } from '../Modelo/Medida';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedidaService {

  constructor(private http:HttpClient) { }

  UrlMedida='http://localhost:8080/medida';

  getMedidas(){
    return this.http.get<Medida[]>(this.UrlMedida);
  }

  createMedida(medida:Medida){
    return this.http.post<Medida>(this.UrlMedida,medida);
  }

  getMedidaId(id:number){
    return this.http.get<Medida>(this.UrlMedida+"/"+id);
  }

  updateMedida(medida:Medida){
    return this.http.put<Medida>(this.UrlMedida+"/"+medida.idmedida,medida);
  }

  deleteMedida(medida:Medida){
    return this.http.delete<Medida>(this.UrlMedida+"/"+medida.idmedida);
  }

}
