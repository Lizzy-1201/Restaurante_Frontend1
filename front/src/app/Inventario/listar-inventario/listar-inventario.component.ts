import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioService } from '../../Service/inventario.service'
import { Inventario } from 'src/app/Modelo/Inventario';
import { TiendaService } from '../../Service/tienda.service'
import { Tienda } from 'src/app/Modelo/Tienda';
import { ProductoService } from '../../Service/producto.service'
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-listar-inventario',
  templateUrl: './listar-inventario.component.html',
  styleUrls: ['./listar-inventario.component.css']
})
export class ListarInventarioComponent implements OnInit {

  productos:Producto[];
  tiendas:Tienda[];
  inventarios:Inventario[];
  constructor(private service:InventarioService, private router:Router, private serviceTienda:TiendaService, private serviceProducto:ProductoService) { }

  ngOnInit() {
    this.service.getInventarios()
    .subscribe(data=>{
      this.inventarios=data;
    })

    this.serviceTienda.getTiendas()
    .subscribe(data=>{
      this.tiendas=data;
    })

    this.serviceProducto.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  Editar(inventario:Inventario):void{
    localStorage.setItem("idtienda", inventario.idtienda.toString());
    localStorage.setItem("idproducto", inventario.idproducto.toString());
    this.router.navigate(["editInventario"]);
  }

  Delete(inventario:Inventario){
    this.service.deleteInventario(inventario)
    .subscribe(data=>{
      this.inventarios=this.inventarios.filter(p=>p!==inventario);
      alert("Inventario eliminado...");
    })
  }

}
