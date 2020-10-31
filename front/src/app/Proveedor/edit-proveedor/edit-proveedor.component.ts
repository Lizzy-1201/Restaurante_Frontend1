import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/Modelo/Proveedor';
import { ProveedorService } from 'src/app/Service/proveedor.service';

@Component({
  selector: 'app-edit-proveedor',
  templateUrl: './edit-proveedor.component.html',
  styleUrls: ['./edit-proveedor.component.css']
})
export class EditProveedorComponent implements OnInit {

  modelProveedor = new Proveedor();
  constructor(private router:Router,private service:ProveedorService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProveedorId(+id)
    .subscribe(data=>{
      this.modelProveedor=data;
    })
  }

  Actualizar(proveedor:Proveedor){
    this.service.updateProveedor(proveedor)
    .subscribe(data=>{
      this.modelProveedor=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listarProveedor"]);
    })
  }

}
