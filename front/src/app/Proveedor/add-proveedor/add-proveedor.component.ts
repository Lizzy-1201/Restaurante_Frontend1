import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Modelo/Proveedor';
import { ProveedorService } from 'src/app/Service/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {

  modelProveedor = new Proveedor();
  constructor(private router:Router, private service:ProveedorService) { }

  ngOnInit(): void {
  }

  Guardar(proveedor:Proveedor){
    this.service.createProveedor(proveedor)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["listarProveedor"]);
    })
  }

}
