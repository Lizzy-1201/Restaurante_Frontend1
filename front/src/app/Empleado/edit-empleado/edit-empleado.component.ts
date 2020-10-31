import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';
import { EmpleadoService } from 'src/app/Service/empleado.service';
import { TiendaService } from '../../Service/tienda.service'
import { Tienda } from 'src/app/Modelo/Tienda';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {
  
  tiendas:Tienda[];
  modelEmpleado = new Empleado();
  constructor(private router:Router,private service:EmpleadoService, private serviceTienda:TiendaService) { }

  ngOnInit(): void {
    this.Editar();

    this.serviceTienda.getTiendas()
    .subscribe(data=>{
      this.tiendas=data;
    })
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getEmpleadoId(+id)
    .subscribe(data=>{
      this.modelEmpleado=data;
    })
  }

  Actualizar(empleado:Empleado){
    this.service.updateEmpleado(empleado)
    .subscribe(data=>{
      this.modelEmpleado=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listarEmpleado"]);
    })
  }

}
