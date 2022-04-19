import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MaterialModule } from './material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { CrudAlumnoComponent } from './components/crud-alumno/crud-alumno.component';

import { GrillaCursosComponent } from './components/grilla-cursos/grilla-cursos.component';
import { CrudCursoComponent } from './components/crud-curso/crud-curso.component';
import { MaterialModulePackage } from './material/material.modulePackage';
import { ApellidoNombrePipe } from './pipes/apellido-nombre.pipe';
import { AlumnoService } from './services/alumno.service';
import { CursoService } from './services/curso.service';
import { InscripcionCursoService } from './services/inscripcion-curso.service';
import { GrillaAlumnosComponent } from './components/grilla-alumnos/grilla-alumnos.component';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    DialogComponent,
    CrudAlumnoComponent,
    GrillaAlumnosComponent,
    GrillaCursosComponent,
    CrudCursoComponent,
    ApellidoNombrePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModulePackage,
    MatInputModule
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule
  ],
  providers: [CursoService,InscripcionCursoService,AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
