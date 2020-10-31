import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVentaEmpleadoComponent } from './add-venta-empleado.component';

describe('AddVentaEmpleadoComponent', () => {
  let component: AddVentaEmpleadoComponent;
  let fixture: ComponentFixture<AddVentaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVentaEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVentaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
