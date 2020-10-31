import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../Service/inventario.service'
import { Inventario } from 'src/app/Modelo/Inventario';
import { Router } from '@angular/router';
import { TiendaService } from '../../Service/tienda.service'
import { Tienda } from 'src/app/Modelo/Tienda';
import { ProductoService } from '../../Service/producto.service'
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-listar-producto-tienda',
  templateUrl: './listar-producto-tienda.component.html',
  styleUrls: ['./listar-producto-tienda.component.css']
})
export class ListarProductoTiendaComponent implements OnInit {

  productos:Producto[];
  tiendas:Tienda[];
  inventarios:Inventario[];
  modelInventario = new Inventario();
  constructor(private service:InventarioService, private router:Router, private serviceTienda:TiendaService, private serviceProducto:ProductoService) { }

  ngOnInit(): void {
    this.Desplegar();

    this.serviceTienda.getTiendas()
    .subscribe(data=>{
      this.tiendas=data;
    })

    this.serviceProducto.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  Desplegar(){
    let id=localStorage.getItem("id");
    this.service.getInventarioIdTienda(+id)
    .subscribe(data=>{
      this.inventarios=data;
    })
  }

  Nuevo(){
    this.router.navigate(["addProductoTienda"]);
  }

  Delete(inventario:Inventario){
    this.service.deleteInventario(inventario)
    .subscribe(data=>{
      this.inventarios=this.inventarios.filter(p=>p!==inventario);
      alert("Producto eliminado...");
    })
  }

  Editar(inventario:Inventario):void{
    localStorage.setItem("id1", inventario.idtienda.toString());
    localStorage.setItem("id2", inventario.idtienda.toString());
    this.router.navigate(["editProductoTienda"]);
  }

}
