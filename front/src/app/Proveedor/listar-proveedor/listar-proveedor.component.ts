import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorService } from '../../Service/proveedor.service'
import { Proveedor } from 'src/app/Modelo/Proveedor';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent implements OnInit {

  proveedores:Proveedor[];
  constructor(private service:ProveedorService, private router:Router) { }

  ngOnInit() {
    this.service.getProveedores()
    .subscribe(data=>{
      this.proveedores=data;
    })
  }

  Editar(proveedor:Proveedor):void{
    localStorage.setItem("id", proveedor.idproveedor.toString());
    this.router.navigate(["editProveedor"]);
  }

  Delete(proveedor:Proveedor){
    this.service.deleteProveedor(proveedor)
    .subscribe(data=>{
      this.proveedores=this.proveedores.filter(p=>p!==proveedor);
      alert("Usuario eliminado...");
    })
  }

  Nuevo(){
    this.router.navigate(["addProveedor"]);
  }

}
