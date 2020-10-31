import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../Service/producto.service'
import { Producto } from 'src/app/Modelo/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-receta',
  templateUrl: './add-receta.component.html',
  styleUrls: ['./add-receta.component.css']
})
export class AddRecetaComponent implements OnInit {

  modelProducto = new Producto();
  productos:Producto[];
  constructor(private service:ProductoService, private router:Router) { }

  ngOnInit() {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }



}
