import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventario } from 'src/app/Modelo/Inventario';
import { InventarioService } from 'src/app/Service/inventario.service';

@Component({
  selector: 'app-edit-producto-tienda',
  templateUrl: './edit-producto-tienda.component.html',
  styleUrls: ['./edit-producto-tienda.component.css']
})
export class EditProductoTiendaComponent implements OnInit {

  modelInventario = new Inventario();
  constructor(private router:Router,private service:InventarioService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id1=localStorage.getItem("id1");
    let id2=localStorage.getItem("id2");
    this.service.getInventarioId(+id1, +id2)
    .subscribe(data=>{
      this.modelInventario=data;
    })
  }

  Actualizar(inventario:Inventario){
    this.service.updateInventario(inventario)
    .subscribe(data=>{
      this.modelInventario=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listarProductoTienda"]);
    })
  }

}
