import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductoRecetaComponent } from './edit-producto-receta.component';

describe('EditProductoRecetaComponent', () => {
  let component: EditProductoRecetaComponent;
  let fixture: ComponentFixture<EditProductoRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductoRecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductoRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
