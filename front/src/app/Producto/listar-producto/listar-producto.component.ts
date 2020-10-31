import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../Service/producto.service'
import { Producto } from 'src/app/Modelo/Producto';
import {FormControl} from '@angular/forms';
import { Medida } from 'src/app/Modelo/Medida';
import { MedidaService } from 'src/app/Service/medida.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  medidas:Medida[];
  productos:Producto[];
  constructor(private service:ProductoService, private router:Router, private serviceMedida:MedidaService) { }

  ngOnInit() {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
    this.serviceMedida.getMedidas()
    .subscribe(data=>{
      this.medidas=data;
    })
  }

  Editar(producto:Producto):void{
    localStorage.setItem("id", producto.idproducto.toString());
    this.router.navigate(["editProducto"]);
  }

  Delete(producto:Producto){
    this.service.deleteProducto(producto)
    .subscribe(data=>{
      this.productos=this.productos.filter(p=>p!==producto);
      alert("Producto eliminado...");
    })
  }

  Nuevo(){
    this.router.navigate(["addProducto"]);
  }

  Receta(producto:Producto):void{
    localStorage.setItem("id", producto.idproducto.toString());
    this.router.navigate(["listarProductoReceta"]);
  }

}
