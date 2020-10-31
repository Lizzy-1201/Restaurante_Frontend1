import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVentaEmpleadoComponent } from './listar-venta-empleado.component';

describe('ListarVentaEmpleadoComponent', () => {
  let component: ListarVentaEmpleadoComponent;
  let fixture: ComponentFixture<ListarVentaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVentaEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVentaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
