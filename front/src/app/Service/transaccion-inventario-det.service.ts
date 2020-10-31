import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaccion_Inventario_Det } from 'src/app/Modelo/Transaccion_Inventario_Det';

@Injectable({
  providedIn: 'root'
})
export class TransaccionInventarioDetService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/transaccioninventariodetalle';

  getTransaccionInventarioDets(){
    return this.http.get<Transaccion_Inventario_Det[]>(this.Url);
  }

  createTransaccionInventarioDetEmpleado(transaccion_inventario_det:Transaccion_Inventario_Det){
    return this.http.post<Transaccion_Inventario_Det>(this.Url,transaccion_inventario_det);
  }

  getTransaccionInventarioDetId(id:number){
    return this.http.get<Transaccion_Inventario_Det>(this.Url+"/"+id);
  }

  getTransaccionInventarioDetEmpleado(id:number){
    return this.http.get<Transaccion_Inventario_Det[]>(this.Url+"/listarempleado/"+id);
  }

  getTransaccionInventarioDetFecha(fecha:String){
    return this.http.get<Transaccion_Inventario_Det[]>(this.Url+"/listarfecha/"+fecha);
  }

  /*getTransaccionInventarioDet2(id:number){
    return this.http.get<Transaccion_Inventario_Det>(this.Url+"/listarsalida/"+id);
  }

  getTransaccionInventarioDet3(id:number){
    return this.http.get<Transaccion_Inventario_Det>(this.Url+"/listarrecetadetalle/"+id);
  }*/

  updateTransaccionInventarioDet(transaccion_inventario_det:Transaccion_Inventario_Det){
    return this.http.put<Transaccion_Inventario_Det>(this.Url+"/"+transaccion_inventario_det.idtransacciondet,transaccion_inventario_det);
  }

  deleteTransaccionInventarioDet(transaccion_inventario_det:Transaccion_Inventario_Det){
    return this.http.delete<Transaccion_Inventario_Det>(this.Url+"/"+transaccion_inventario_det.idtransacciondet);
  }
}
