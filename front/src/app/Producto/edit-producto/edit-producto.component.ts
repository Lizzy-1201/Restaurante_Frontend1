import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductoService } from 'src/app/Service/producto.service';
import { MedidaService } from 'src/app/Service/medida.service';
import { Medida } from 'src/app/Modelo/Medida';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {
  
  productos:Producto[];
  medidas:Medida[];
  modelProducto = new Producto();
  constructor(private router:Router,private service:ProductoService, private serviceMedida:MedidaService) { }

  ngOnInit(): void {
    this.Editar();
    
    this.serviceMedida.getMedidas()
    .subscribe(data=>{
      this.medidas=data;
    })
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProductoId(+id)
    .subscribe(data=>{
      this.modelProducto=data;
    })
  }

  Actualizar(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.modelProducto=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listarProducto"]);
    })
  }

}
