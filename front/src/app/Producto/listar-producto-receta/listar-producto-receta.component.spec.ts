import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductoRecetaComponent } from './listar-producto-receta.component';

describe('ListarProductoRecetaComponent', () => {
  let component: ListarProductoRecetaComponent;
  let fixture: ComponentFixture<ListarProductoRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProductoRecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductoRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
