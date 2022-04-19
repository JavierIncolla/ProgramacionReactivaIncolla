import { Injectable } from '@angular/core';
import { InscripcionCurso } from '../models/inscripcionCurso';

@Injectable({
  providedIn: 'root'
})
export class InscripcionCursoService {

  listaInscriptos:InscripcionCurso[]=[];

  getAllInscripciones() {
    return this.listaInscriptos;
  }
  addInscripcionCurso(inscripcion: InscripcionCurso) {
    inscripcion.id = this.obtenerSiguienteId() + 1;
    this.listaInscriptos.push(inscripcion);
  }
  obtenerSiguienteId(): number {
    let max = 0;
    for (let i = 0; i < this.listaInscriptos.length; i++) {
      if (this.listaInscriptos[i].id > max)
        max = this.listaInscriptos[i].id;
    }
    return max;
  }


  constructor() {
    this.listaInscriptos=[
      new InscripcionCurso(1,1,1,0,new Date()),
      new InscripcionCurso(2,2,2,0,new Date()),
      new InscripcionCurso(3,3,3,0,new Date()),
      new InscripcionCurso(4,4,4,0,new Date())
    ];
   }

    getInscripcionCursoById(id: number) {
      return this.listaInscriptos[this.listaInscriptos.findIndex(x => x.id == id)];
    }
    updateInscripcionCurso(inscripcion: InscripcionCurso) {
      this.listaInscriptos[this.listaInscriptos.findIndex(x => x.id == inscripcion.id)] = inscripcion;
    }
    deleteInscripcionCurso(inscripcion: InscripcionCurso) {
      this.listaInscriptos.splice(this.listaInscriptos.findIndex(x => x.id == inscripcion.id), 1);
    }
    
}
