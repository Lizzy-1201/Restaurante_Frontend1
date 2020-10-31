import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEmpleadoComponent } from './Empleado/listar-empleado/listar-empleado.component';
import { AddEmpleadoComponent } from './Empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './Empleado/edit-empleado/edit-empleado.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from './Service/empleado.service';
import { TiendaService } from './Service/tienda.service';
import { ProductoService } from './Service/producto.service';
import { InventarioService } from './Service/inventario.service';
import { HttpClientModule } from '@angular/common/http';
import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';
import { EditProductoComponent } from './Producto/edit-producto/edit-producto.component';
import { AddProductoComponent } from './Producto/add-producto/add-producto.component';
import { EditTiendaComponent } from './Tienda/edit-tienda/edit-tienda.component';
import { AddTiendaComponent } from './Tienda/add-tienda/add-tienda.component';
import { ListarTiendaComponent } from './Tienda/listar-tienda/listar-tienda.component';
import { InicioComponent } from './Inicio/inicio/inicio.component';
import { ListarRecetaComponent } from './Receta/listar-receta/listar-receta.component';
import { AddRecetaComponent } from './Receta/add-receta/add-receta.component';
import { EditRecetaComponent } from './Receta/edit-receta/edit-receta.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { AddProveedorComponent } from './Proveedor/add-proveedor/add-proveedor.component';
import { EditProveedorComponent } from './Proveedor/edit-proveedor/edit-proveedor.component';
import { ListarProveedorComponent } from './Proveedor/listar-proveedor/listar-proveedor.component';
import { ListarProductoTiendaComponent } from './Tienda/listar-producto-tienda/listar-producto-tienda.component';
import { ListarInventarioComponent } from './Inventario/listar-inventario/listar-inventario.component';
import { EditInventarioComponent } from './Inventario/edit-inventario/edit-inventario.component';
import { AddProductoTiendaComponent } from './Tienda/add-producto-tienda/add-producto-tienda.component';
import { EditProductoTiendaComponent } from './Tienda/edit-producto-tienda/edit-producto-tienda.component';
import { ListarProductoRecetaComponent } from './Producto/listar-producto-receta/listar-producto-receta.component';
import { AddProductoRecetaComponent } from './Producto/add-producto-receta/add-producto-receta.component';
import { EditProductoRecetaComponent } from './Producto/edit-producto-receta/edit-producto-receta.component';
import { ListarVentaEmpleadoComponent } from './Empleado/listar-venta-empleado/listar-venta-empleado.component';
import { AddVentaEmpleadoComponent } from './Empleado/add-venta-empleado/add-venta-empleado.component';
import { ListarTransaccionInventarioDetComponent } from './Transaccion_Inventario_Det/listar-transaccion-inventario-det/listar-transaccion-inventario-det.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEmpleadoComponent,
    AddEmpleadoComponent,
    EditEmpleadoComponent,
    ListarProductoComponent,
    EditProductoComponent,
    AddProductoComponent,
    EditTiendaComponent,
    AddTiendaComponent,
    ListarTiendaComponent,
    InicioComponent,
    ListarRecetaComponent,
    AddRecetaComponent,
    EditRecetaComponent,
    AddProveedorComponent,
    EditProveedorComponent,
    ListarProveedorComponent,
    ListarProductoTiendaComponent,
    ListarInventarioComponent,
    EditInventarioComponent,
    AddProductoTiendaComponent,
    EditProductoTiendaComponent,
    ListarProductoRecetaComponent,
    AddProductoRecetaComponent,
    EditProductoRecetaComponent,
    ListarVentaEmpleadoComponent,
    AddVentaEmpleadoComponent,
    ListarTransaccionInventarioDetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [
    EmpleadoService,
    TiendaService,
    ProductoService,
    InventarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
