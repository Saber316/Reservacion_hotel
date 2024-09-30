import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class ReservaService {
    private datosReserva: any = {};
    private habitacionesDisponibles = 10; // Número total de habitaciones disponibles
  
    setReserva(datos: any) {
      this.datosReserva = datos;
    }
  
    getReserva() {
      return this.datosReserva;
    }
  
    hayHabitacionesDisponibles(numeroHabitaciones: number): boolean {
      return this.habitacionesDisponibles >= numeroHabitaciones;
    }
  }
  