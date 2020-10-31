import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta_Detalle } from 'src/app/Modelo/Receta_Detalle';
import { RecetaDetalleService } from 'src/app/Service/receta-detalle.service';
import { MedidaService } from 'src/app/Service/medida.service';
import { Medida } from 'src/app/Modelo/Medida';

@Component({
  selector: 'app-edit-producto-receta',
  templateUrl: './edit-producto-receta.component.html',
  styleUrls: ['./edit-producto-receta.component.css']
})
export class EditProductoRecetaComponent implements OnInit {

  medidas:Medida[];
  modelRecetaDetalle = new Receta_Detalle();
  constructor(private router:Router,private service:RecetaDetalleService, private serviceMedida:MedidaService) { }

  ngOnInit(): void {
    this.Editar();

    this.serviceMedida.getMedidas()
    .subscribe(data=>{
      this.medidas=data;
    })
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getRecetaDetalleIdProducto3(+id)
    .subscribe(data=>{
      this.modelRecetaDetalle=data;
    })
  }

  Actualizar(receta_detalle:Receta_Detalle){
    this.service.updateRecetaDetalle(receta_detalle)
    .subscribe(data=>{
      this.modelRecetaDetalle=data;
      alert("Se Actualizo con Exito...!!!");
      localStorage.setItem("id", receta_detalle.idproductoentrada.toString());
      this.router.navigate(["listarProductoReceta"]);
    })
  }


}
