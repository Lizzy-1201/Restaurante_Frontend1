import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductoTiendaComponent } from './edit-producto-tienda.component';

describe('EditProductoTiendaComponent', () => {
  let component: EditProductoTiendaComponent;
  let fixture: ComponentFixture<EditProductoTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductoTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
