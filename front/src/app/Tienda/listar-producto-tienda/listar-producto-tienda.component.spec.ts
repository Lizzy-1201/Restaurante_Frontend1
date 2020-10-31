import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductoTiendaComponent } from './listar-producto-tienda.component';

describe('ListarProductoTiendaComponent', () => {
  let component: ListarProductoTiendaComponent;
  let fixture: ComponentFixture<ListarProductoTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProductoTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
