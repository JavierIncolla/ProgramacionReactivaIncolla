import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrillaAlumnosComponent } from './components/grilla-alumnos/grilla-alumnos.component';
import { GrillaCursosComponent } from './components/grilla-cursos/grilla-cursos.component';

const routes: Routes = [
  {
    path: 'Alumnos',
    component: GrillaAlumnosComponent
  },
  {
    path: 'Profesores',
    component: GrillaCursosComponent
  },
  {
    path: 'Cursos',
    component: GrillaCursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
