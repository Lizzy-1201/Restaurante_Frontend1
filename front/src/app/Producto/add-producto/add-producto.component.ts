import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Medida } from 'src/app/Modelo/Medida';
import { ProductoService } from 'src/app/Service/producto.service';
import { MedidaService } from 'src/app/Service/medida.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  
  medidas:Medida[];
  modelProducto = new Producto();
  constructor(private router:Router, private service:ProductoService, private serviceMedida:MedidaService) { }

  ngOnInit() {
    this.serviceMedida.getMedidas()
    .subscribe(data=>{
      this.medidas=data;
    })
  }

  Guardar(producto:Producto){
    this.service.createProducto(producto)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["listarProducto"]);
    })
  }

}
