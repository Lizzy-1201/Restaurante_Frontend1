import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../Service/empleado.service'
import { Empleado } from 'src/app/Modelo/Empleado';
import { ProductoService } from '../../Service/producto.service'
import { Producto } from 'src/app/Modelo/producto';
import { TransaccionInventarioDetService } from '../../Service/transaccion-inventario-det.service'
import { Transaccion_Inventario_Det } from 'src/app/Modelo/Transaccion_Inventario_Det';

@Component({
  selector: 'app-listar-transaccion-inventario-det',
  templateUrl: './listar-transaccion-inventario-det.component.html',
  styleUrls: ['./listar-transaccion-inventario-det.component.css']
})
export class ListarTransaccionInventarioDetComponent implements OnInit {

  productos:Producto[];
  empleados:Empleado[];
  transaccion_inventario_dets:Transaccion_Inventario_Det[];
  modelTransaccionInventarioDet = new Transaccion_Inventario_Det();
  constructor(private serviceEmpleado:EmpleadoService, private router:Router, private serviceProducto:ProductoService, private service:TransaccionInventarioDetService) { }

  ngOnInit(): void {
    this.serviceEmpleado.getEmpleados()
    .subscribe(data=>{
      this.empleados=data;
    })

    this.serviceProducto.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })

    this.service.getTransaccionInventarioDets()
    .subscribe(data=>{
      this.transaccion_inventario_dets=data;
    })
  }

  Fecha(transaccion_inventario_det:Transaccion_Inventario_Det){
    localStorage.setItem("fecha", transaccion_inventario_det.fecha.toString());
    let fecha=localStorage.getItem("fecha");
    this.service.getTransaccionInventarioDetFecha(fecha)
    .subscribe(data=>{
      this.transaccion_inventario_dets=data;
    })
  }

}
