import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/auth/reserva.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exitosa',
  templateUrl: './exitosa.component.html',
  styleUrls: ['./exitosa.component.css']
})
export class ExitosaComponent implements OnInit {
  datosReserva: any;

  constructor(private reservaService: ReservaService, private router: Router) {}

  ngOnInit() {
    this.datosReserva = this.reservaService.getReserva();
  }

  volver() {
    this.router.navigate(['/']); // Redirigir a la página principal
  }
}
