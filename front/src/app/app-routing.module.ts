import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarEmpleadoComponent } from './Empleado/listar-empleado/listar-empleado.component';
import { AddEmpleadoComponent } from './Empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './Empleado/edit-empleado/edit-empleado.component';
import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';
import { EditProductoComponent } from './Producto/edit-producto/edit-producto.component';
import { AddProductoComponent } from './Producto/add-producto/add-producto.component';
import { ListarTiendaComponent } from './Tienda/listar-tienda/listar-tienda.component';
import { EditTiendaComponent } from './Tienda/edit-tienda/edit-tienda.component';
import { AddTiendaComponent } from './Tienda/add-tienda/add-tienda.component';
import { InicioComponent } from './Inicio/inicio/inicio.component';
import { AddRecetaComponent } from './Receta/add-receta/add-receta.component';
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

const routes: Routes = [
  {path:'listarEmpleado', component:ListarEmpleadoComponent},
  {path:'addEmpleado', component:AddEmpleadoComponent},
  {path:'editEmpleado', component:EditEmpleadoComponent},
  {path:'listarProducto', component:ListarProductoComponent},
  {path:'editProducto', component:EditProductoComponent},
  {path:'addProducto', component:AddProductoComponent},
  {path:'listarTienda', component:ListarTiendaComponent},
  {path:'editTienda', component:EditTiendaComponent},
  {path:'addTienda', component:AddTiendaComponent},
  {path:'inicio', component:InicioComponent},
  {path:'addReceta', component:AddRecetaComponent},
  {path:'addProveedor', component:AddProveedorComponent},
  {path:'listarProveedor', component:ListarProveedorComponent},
  {path:'editProveedor', component:EditProveedorComponent},
  {path:'listarProductoTienda', component:ListarProductoTiendaComponent},
  {path:'listarInventario', component:ListarInventarioComponent},
  {path:'editInventario', component:EditInventarioComponent},
  {path:'addProductoTienda', component:AddProductoTiendaComponent},
  {path:'editProductoTienda', component:EditProductoTiendaComponent},
  {path:'listarProductoReceta', component:ListarProductoRecetaComponent},
  {path:'addProductoReceta', component:AddProductoRecetaComponent},
  {path:'editProductoReceta', component:EditProductoRecetaComponent},
  {path:'listarVentaEmpleado', component:ListarVentaEmpleadoComponent},
  {path:'addVentaEmpleado', component:AddVentaEmpleadoComponent},
  {path:'listarTransaccionInventarioDet', component:ListarTransaccionInventarioDetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
