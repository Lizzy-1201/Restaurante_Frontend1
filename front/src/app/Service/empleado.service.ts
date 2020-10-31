import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../Modelo/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/empleado';

  getEmpleados(){
    return this.http.get<Empleado[]>(this.Url);
  }

  createEmpleado(empleado:Empleado){
    return this.http.post<Empleado>(this.Url,empleado);
  }

  getEmpleadoId(id:number){
    return this.http.get<Empleado>(this.Url+"/"+id);
  }

  updateEmpleado(empleado:Empleado){
    return this.http.put<Empleado>(this.Url+"/"+empleado.idempleado,empleado);
  }

  deleteEmpleado(empleado:Empleado){
    return this.http.delete<Empleado>(this.Url+"/"+empleado.idempleado);
  }

}
