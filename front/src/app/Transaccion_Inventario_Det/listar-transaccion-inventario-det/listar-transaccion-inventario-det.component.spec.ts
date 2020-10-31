import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTransaccionInventarioDetComponent } from './listar-transaccion-inventario-det.component';

describe('ListarTransaccionInventarioDetComponent', () => {
  let component: ListarTransaccionInventarioDetComponent;
  let fixture: ComponentFixture<ListarTransaccionInventarioDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTransaccionInventarioDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTransaccionInventarioDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
