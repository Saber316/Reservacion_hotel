import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '../services/auth/reserva.service';

// Define un tipo para las fechas ocupadas
interface FechaOcupada {
  inicio: Date;
  fin: Date;
}

// Define un tipo para las habitaciones
interface Habitacion {
  id: number;
  tipo: string;
  precio: number;
  fechasOcupadas: FechaOcupada[];
}

@Component({
  selector: 'app-busqueda-habitaciones',
  templateUrl: './busqueda-habitaciones.component.html',
  styleUrls: ['./busqueda-habitaciones.component.css']
})
export class BusquedaHabitacionesComponent implements OnInit {
  fechaIngreso: string = '';
  fechaSalida: string = '';
  habitaciones: Habitacion[] = []; // Lista de habitaciones
  resultados: (Habitacion & { ocupada: boolean })[] = []; // Resultados de la búsqueda

  constructor(private reservaService: ReservaService, private router: Router) {}

  ngOnInit(): void {
    this.habitaciones = [
      { id: 1, tipo: 'Standard', precio: 100, fechasOcupadas: [{ inicio: new Date('2024-10-01'), fin: new Date('2024-10-05') }] },
      { id: 2, tipo: 'Premium', precio: 200, fechasOcupadas: [] }, // Sin ocupaciones
      { id: 3, tipo: 'Standard', precio: 100, fechasOcupadas: [{ inicio: new Date('2024-10-10'), fin: new Date('2024-10-15') }] },
      { id: 4, tipo: 'Premium', precio: 200, fechasOcupadas: [{ inicio: new Date('2024-10-02'), fin: new Date('2024-10-04') }] },
    ];
  }

  buscarHabitaciones() {
    const fechaIngreso = new Date(this.fechaIngreso);
    const fechaSalida = new Date(this.fechaSalida);

    if (fechaIngreso >= fechaSalida) {
      alert('La fecha de ingreso debe ser anterior a la fecha de salida.');
      return;
    }

    this.resultados = this.habitaciones.map(habitacion => {
      const ocupada = habitacion.fechasOcupadas.some((f: FechaOcupada) => 
        (fechaIngreso >= f.inicio && fechaIngreso <= f.fin) || 
        (fechaSalida >= f.inicio && fechaSalida <= f.fin) || 
        (fechaIngreso <= f.inicio && fechaSalida >= f.fin)
      );

      return { ...habitacion, ocupada }; // Añadir el estado de ocupación
    });
  }

  hayHabitacionesDisponibles(): boolean {
    return this.resultados.length > 0 && this.resultados.some(h => !h.ocupada);
  }

  reservarAhora() {
    const habitacionDisponible = this.resultados.find(h => !h.ocupada);
    
    if (habitacionDisponible) {
      // Aquí puedes guardar información de la habitación seleccionada en el servicio, si lo deseas
      this.reservaService.setReserva({ habitacion: habitacionDisponible });
      
      // Redirigir a la página de reserva
      this.router.navigate(['/reserva']);
    } else {
      alert('No hay habitaciones disponibles para reservar.');
    }
  }
}
