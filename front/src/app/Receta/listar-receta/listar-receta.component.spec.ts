import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRecetaComponent } from './listar-receta.component';

describe('ListarRecetaComponent', () => {
  let component: ListarRecetaComponent;
  let fixture: ComponentFixture<ListarRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
