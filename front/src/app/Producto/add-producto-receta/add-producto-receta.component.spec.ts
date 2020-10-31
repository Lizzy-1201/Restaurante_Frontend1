import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductoRecetaComponent } from './add-producto-receta.component';

describe('AddProductoRecetaComponent', () => {
  let component: AddProductoRecetaComponent;
  let fixture: ComponentFixture<AddProductoRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductoRecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductoRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
