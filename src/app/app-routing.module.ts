import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { BusquedaHabitacionesComponent } from './busqueda-habitaciones/busqueda-habitaciones.component';
import { ExitosaComponent } from './exitosa/exitosa.component';


const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio',component:DashboardComponent},
  {path:'iniciar-sesion',component:LoginComponent},
  {path:'reserva',component:ReservaComponent},
  {path:'confirmacion',component:ConfirmacionComponent},
  {path:'busqueda-habitaciones',component:BusquedaHabitacionesComponent},
  {path:'exitosa',component:ExitosaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
