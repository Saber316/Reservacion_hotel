import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la redirección
import { ReservaService } from '../services/auth/reserva.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {
  datosReserva: any;

  constructor(private reservaService: ReservaService, private router: Router) {}

  ngOnInit() {
    this.datosReserva = this.reservaService.getReserva();
  }

  confirmarReserva() {
    // Aquí podrías agregar cualquier lógica adicional, como guardar en la base de datos
    // Redirigir a la página de confirmación exitosa
    this.router.navigate(['/exitosa']);
  }
}
