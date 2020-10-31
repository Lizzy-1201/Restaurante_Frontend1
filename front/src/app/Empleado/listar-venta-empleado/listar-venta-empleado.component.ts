import { Component, OnInit } from '@angular/core';
import { TransaccionInventarioDetService } from '../../Service/transaccion-inventario-det.service'
import { Transaccion_Inventario_Det } from 'src/app/Modelo/Transaccion_Inventario_Det';
import { ProductoService } from '../../Service/producto.service'
import { Producto } from 'src/app/Modelo/Producto';
import { EmpleadoService } from '../../Service/empleado.service'
import { Empleado } from 'src/app/Modelo/Empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-venta-empleado',
  templateUrl: './listar-venta-empleado.component.html',
  styleUrls: ['./listar-venta-empleado.component.css']
})
export class ListarVentaEmpleadoComponent implements OnInit {

  productos:Producto[];
  empleados:Empleado[];
  transaccion_inventario_dets:Transaccion_Inventario_Det[];
  modelTransaccionInventarioDet = new Transaccion_Inventario_Det();
  constructor(private service:TransaccionInventarioDetService, private router:Router, private serviceEmpleado:EmpleadoService, private serviceProducto:ProductoService) { }

  ngOnInit(): void {
    this.Desplegar();

    this.serviceEmpleado.getEmpleados()
    .subscribe(data=>{
      this.empleados=data;
    })

    this.serviceProducto.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  Desplegar(){
    let id=localStorage.getItem("id");
    this.service.getTransaccionInventarioDetEmpleado(+id)
    .subscribe(data=>{
      this.transaccion_inventario_dets=data;
    })
  }

  Nuevo(){
    this.router.navigate(["addVentaEmpleado"]);
  }

  Delete(transaccion_inventario_det:Transaccion_Inventario_Det){
    this.service.deleteTransaccionInventarioDet(transaccion_inventario_det)
    .subscribe(data=>{
      this.transaccion_inventario_dets=this.transaccion_inventario_dets.filter(p=>p!==transaccion_inventario_det);
      alert("Venta eliminada...");
    })
  }

  Editar(transaccion_inventario_det:Transaccion_Inventario_Det):void{
    localStorage.setItem("id", transaccion_inventario_det.idtransacciondet.toString());
    this.router.navigate(["editProductoTienda"]);
  }

}
