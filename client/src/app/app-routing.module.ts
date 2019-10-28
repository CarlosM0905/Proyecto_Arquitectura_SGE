import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpleadoListComponent} from './components/empleado-list/empleado-list.component';
// definir rutas 
const routes: Routes = [
  {
    path: '',
    redirectTo: '/empleados',
    pathMatch: 'full'
  },
  {
    path:'empleados',
    component: EmpleadoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
