import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TiendaService } from '../../Service/tienda.service'
import { Tienda } from 'src/app/Modelo/Tienda';

@Component({
  selector: 'app-listar-tienda',
  templateUrl: './listar-tienda.component.html',
  styleUrls: ['./listar-tienda.component.css']
})
export class ListarTiendaComponent implements OnInit {

  tiendas:Tienda[];
  constructor(private service:TiendaService, private router:Router) { }

  ngOnInit() {
    this.service.getTiendas()
    .subscribe(data=>{
      this.tiendas=data;
    })
  }

  Editar(tienda:Tienda):void{
    localStorage.setItem("id", tienda.idtienda.toString());
    this.router.navigate(["editTienda"]);
  }

  Delete(tienda:Tienda){
    this.service.deleteTienda(tienda)
    .subscribe(data=>{
      this.tiendas=this.tiendas.filter(p=>p!==tienda);
      alert("Tienda eliminada...");
    })
  }

  Producto(tienda:Tienda):void{
    localStorage.setItem("id", tienda.idtienda.toString());
    this.router.navigate(["listarProductoTienda"]);
  }

  Nuevo(){
    this.router.navigate(["addTienda"]);
  }

}
