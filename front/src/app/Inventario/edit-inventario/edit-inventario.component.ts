import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventario } from 'src/app/Modelo/Inventario';
import { InventarioService } from 'src/app/Service/inventario.service';
import { TiendaService } from '../../Service/tienda.service'
import { Tienda } from 'src/app/Modelo/Tienda';
import { ProductoService } from '../../Service/producto.service'
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-edit-inventario',
  templateUrl: './edit-inventario.component.html',
  styleUrls: ['./edit-inventario.component.css']
})
export class EditInventarioComponent implements OnInit {

  productos:Producto[];
  tiendas:Tienda[];
  modelInventario = new Inventario();
  constructor(private router:Router,private service:InventarioService, private serviceTienda:TiendaService, private serviceProducto:ProductoService) { }

  ngOnInit(): void {
    this.Editar();

    this.serviceTienda.getTiendas()
    .subscribe(data=>{
      this.tiendas=data;
    })

    this.serviceProducto.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  Editar(){
    let idtienda=localStorage.getItem("idtienda");
    let idproducto=localStorage.getItem("idproducto");
    this.service.getInventarioId(+idtienda, +idproducto)
    .subscribe(data=>{
      this.modelInventario=data;
    })
  }

  Actualizar(inventario:Inventario){
    this.service.updateInventario(inventario)
    .subscribe(data=>{
      this.modelInventario=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listarInventario"]);
    })
  }

}
