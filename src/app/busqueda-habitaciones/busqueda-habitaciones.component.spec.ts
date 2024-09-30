import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaHabitacionesComponent } from './busqueda-habitaciones.component';

describe('BusquedaHabitacionesComponent', () => {
  let component: BusquedaHabitacionesComponent;
  let fixture: ComponentFixture<BusquedaHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaHabitacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
