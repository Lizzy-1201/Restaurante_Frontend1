import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistema-restaurante';

  constructor(private router:Router){}

  Inicio(){
    this.router.navigate(["inicio"]);
  }

  ListarEmpleado(){
    this.router.navigate(["listarEmpleado"]);
  }

  ListarProducto(){
    this.router.navigate(["listarProducto"]);
  }

  ListarTienda(){
    this.router.navigate(["listarTienda"]);
  }

  ListarProveedor(){
    this.router.navigate(["listarProveedor"]);
  }

  ListarInventario(){
    this.router.navigate(["listarInventario"]);
  }

  ListarVenta(){
    this.router.navigate(["listarTransaccionInventarioDet"]);
  }
  
}
