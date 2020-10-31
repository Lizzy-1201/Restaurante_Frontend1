import { Component, OnInit } from '@angular/core';
import { TransaccionInventarioDetService } from '../../Service/transaccion-inventario-det.service'
import { Transaccion_Inventario_Det } from 'src/app/Modelo/Transaccion_Inventario_Det';
import { Router } from '@angular/router';
import { ProductoService } from '../../Service/producto.service'
import { Producto } from 'src/app/Modelo/Producto';
import { InventarioService } from '../../Service/inventario.service'
import { Inventario } from 'src/app/Modelo/Inventario';

@Component({
  selector: 'app-add-venta-empleado',
  templateUrl: './add-venta-empleado.component.html',
  styleUrls: ['./add-venta-empleado.component.css']
})
export class AddVentaEmpleadoComponent implements OnInit {

  inventarios:Inventario[];
  productos:Producto[];
  transaccion_inventario_dets:Transaccion_Inventario_Det[];
  modelTransaccionInventarioDet = new Transaccion_Inventario_Det();
  constructor(private service:TransaccionInventarioDetService, private router:Router, private serviceProducto:ProductoService, private serviceInventario:InventarioService) { }

  ngOnInit(): void {
    this.serviceProducto.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })

    let id=localStorage.getItem("id");
    this.serviceInventario.getInventarioIdEmpleado(+id)
    .subscribe(data=>{
      this.inventarios=data;
    })
  }

  Guardar(transaccion_inventario_det: Transaccion_Inventario_Det){
    let id=localStorage.getItem("id");
    var valorNumerico = Number(id);
    transaccion_inventario_det.idempleado = valorNumerico;
    transaccion_inventario_det.fecha.toString();
    this.service.createTransaccionInventarioDetEmpleado(transaccion_inventario_det)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["listarVentaEmpleado"]);
    })
  }

}
