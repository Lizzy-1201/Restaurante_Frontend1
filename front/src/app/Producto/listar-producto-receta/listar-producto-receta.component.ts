import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecetaDetalleService } from '../../Service/receta-detalle.service'
import { Receta_Detalle } from 'src/app/Modelo/Receta_Detalle';
import { Producto } from 'src/app/Modelo/Producto';
import { Medida } from 'src/app/Modelo/Medida';
import { ProductoService } from '../../Service/producto.service'
import { MedidaService } from '../../Service/medida.service'

@Component({
  selector: 'app-listar-producto-receta',
  templateUrl: './listar-producto-receta.component.html',
  styleUrls: ['./listar-producto-receta.component.css']
})
export class ListarProductoRecetaComponent implements OnInit {

  productos:Producto[];
  medidas:Medida[];
  receta_detalles:Receta_Detalle[];
  constructor(private service:RecetaDetalleService, private router:Router, private serviceProducto:ProductoService, private serviceMedida:MedidaService) { }

  ngOnInit(): void {
    this.Desplegar();

    this.serviceProducto.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })

    this.serviceMedida.getMedidas()
    .subscribe(data=>{
      this.medidas=data;
    })

  }

  Desplegar(){
    let id=localStorage.getItem("id");
    this.service.getRecetaDetalleIdProducto(+id)
    .subscribe(data=>{
      this.receta_detalles=data;
    })
  }

  Nuevo(){
    this.router.navigate(["addProductoReceta"]);
  }

  Delete(receta_detalle:Receta_Detalle){
    this.service.deleteRecetaDetalle(receta_detalle)
    .subscribe(data=>{
      this.receta_detalles=this.receta_detalles.filter(p=>p!==receta_detalle);
      alert("Producto eliminado...");
    })
  }

  Editar(receta_detalle:Receta_Detalle):void{
    localStorage.setItem("id", receta_detalle.idrecetadetalle.toString());
    this.router.navigate(["editProductoReceta"]);
  }

}
