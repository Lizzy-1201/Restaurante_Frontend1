import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/Service/empleado.service';
import { Empleado } from 'src/app/Modelo/Empleado';
import { TiendaService } from '../../Service/tienda.service'
import { Tienda } from 'src/app/Modelo/Tienda';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {
  
  tiendas:Tienda[];
  modelEmpleado = new Empleado();
  constructor(private router:Router, private service:EmpleadoService, private serviceTienda:TiendaService) { }

  ngOnInit() {
    this.serviceTienda.getTiendas()
    .subscribe(data=>{
      this.tiendas=data;
    })
  }

  Guardar(empleado:Empleado){
    this.service.createEmpleado(empleado)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["listarEmpleado"]);
    })
  }

}
