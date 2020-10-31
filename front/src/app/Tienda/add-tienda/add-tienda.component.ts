import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/Modelo/Tienda';
import { TiendaService } from 'src/app/Service/tienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tienda',
  templateUrl: './add-tienda.component.html',
  styleUrls: ['./add-tienda.component.css']
})
export class AddTiendaComponent implements OnInit {

  modelTienda = new Tienda();
  constructor(private router:Router, private service:TiendaService) { }

  ngOnInit(): void {
  }

  Guardar(tienda:Tienda){
    this.service.createTienda(tienda)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["listarTienda"]);
    })
  }

}
