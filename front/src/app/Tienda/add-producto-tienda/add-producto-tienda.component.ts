import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../Service/inventario.service'
import { Inventario } from 'src/app/Modelo/Inventario';
import { Router } from '@angular/router';
import { ProductoService } from '../../Service/producto.service'
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-add-producto-tienda',
  templateUrl: './add-producto-tienda.component.html',
  styleUrls: ['./add-producto-tienda.component.css']
})
export class AddProductoTiendaComponent implements OnInit {

  modelProducto = new Producto();
  productos:Producto[];
  inventarios:Inventario[];
  modelInventario = new Inventario();
  constructor(private service:InventarioService, private router:Router, private serviceProducto:ProductoService) { }

  ngOnInit(): void {
    this.serviceProducto.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  Guardar(inventario:Inventario){
    let id=localStorage.getItem("id");
    var valorNumerico = Number(id);
    inventario.idtienda = valorNumerico;
    this.service.createInventarioTienda(inventario)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["listarProductoTienda"]);
    })
  }

}
