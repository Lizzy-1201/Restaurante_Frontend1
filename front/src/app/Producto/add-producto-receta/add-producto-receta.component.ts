import { Component, OnInit } from '@angular/core';
import { RecetaDetalleService } from '../../Service/receta-detalle.service'
import { Receta_Detalle } from 'src/app/Modelo/Receta_Detalle';
import { Router } from '@angular/router';
import { ProductoService } from '../../Service/producto.service'
import { Producto } from 'src/app/Modelo/Producto';
import { MedidaService } from '../../Service/medida.service'
import { Medida } from 'src/app/Modelo/Medida';

@Component({
  selector: 'app-add-producto-receta',
  templateUrl: './add-producto-receta.component.html',
  styleUrls: ['./add-producto-receta.component.css']
})
export class AddProductoRecetaComponent implements OnInit {

  medidas:Medida[];
  productos:Producto[];
  receta_detalles: Receta_Detalle[];
  modelRecetaDetalle = new  Receta_Detalle();
  constructor(private service:RecetaDetalleService, private router:Router, private serviceProducto:ProductoService, private serviceMedida:MedidaService) { }

  ngOnInit(): void {
    this.serviceProducto.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })

    this.serviceMedida.getMedidas()
    .subscribe(data=>{
      this.medidas=data;
    })
  }

  Guardar(receta_detalle: Receta_Detalle){
    let id=localStorage.getItem("id");
    var valorNumerico = Number(id);
    receta_detalle.idproductoentrada = valorNumerico;
    this.service.createRecetaDetalleProducto(receta_detalle)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["listarProductoReceta"]);
    })
  }

}
