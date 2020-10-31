import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../Service/empleado.service'
import { Empleado } from 'src/app/Modelo/Empleado';
import { TiendaService } from '../../Service/tienda.service'
import { Tienda } from 'src/app/Modelo/Tienda';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  tiendas:Tienda[];
  empleados:Empleado[];
  constructor(private service:EmpleadoService, private router:Router, private serviceTienda:TiendaService) { }

  ngOnInit() {
    this.service.getEmpleados()
    .subscribe(data=>{
      this.empleados=data;
    })

    this.serviceTienda.getTiendas()
    .subscribe(data=>{
      this.tiendas=data;
    })
  }

  Editar(empleado:Empleado):void{
    localStorage.setItem("id", empleado.idempleado.toString());
    this.router.navigate(["editEmpleado"]);
  }

  Venta(empleado:Empleado):void{
    localStorage.setItem("id", empleado.idempleado.toString());
    this.router.navigate(["listarVentaEmpleado"]);
  }

  Delete(empleado:Empleado){
    this.service.deleteEmpleado(empleado)
    .subscribe(data=>{
      this.empleados=this.empleados.filter(p=>p!==empleado);
      alert("Empleado eliminado...");
    })
  }

  Nuevo(){
    this.router.navigate(["addEmpleado"]);
  }

}
