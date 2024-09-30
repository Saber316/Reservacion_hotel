import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '../services/auth/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  fechaIngreso: string = '';
  fechaSalida: string = '';
  numeroHabitaciones: number = 1;
  preferencias: string = '';
  tipoHabitacion: string = ''; // Nueva propiedad para tipo de habitación

  constructor(private reservaService: ReservaService, private router: Router) {}

  onSubmit() {
    // Validación de los campos obligatorios
    if (!this.nombre || !this.email || !this.telefono || !this.fechaIngreso || !this.fechaSalida || !this.tipoHabitacion) {
      alert('Por favor, completa todos los campos obligatorios.');
      return; // Detiene la ejecución si hay campos vacíos
    }

    // Definir el precio según el tipo de habitación
    const precioHabitacion = this.tipoHabitacion === 'premium' ? 200 : 100;

    const datosReserva = {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono,
      fechaIngreso: this.fechaIngreso,
      fechaSalida: this.fechaSalida,
      numeroHabitaciones: this.numeroHabitaciones,
      preferencias: this.preferencias,
      tipoHabitacion: this.tipoHabitacion,
      precio: precioHabitacion * this.numeroHabitaciones, // Calcular precio total
    };

    // Guardar los datos en el servicio
    this.reservaService.setReserva(datosReserva);

    // Redirigir a la página de confirmación
    this.router.navigate(['/confirmacion']);
  }
}
