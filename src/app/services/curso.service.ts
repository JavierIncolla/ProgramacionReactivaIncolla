import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService { 

  cursoList: Curso[] = [];
   

  constructor() {
    this.cursoList = [ 
      new Curso(1, "JAVA", "Curso de JAVA", "Profe de JAVA",new Date()),  
      new Curso(2, "DotNET", "Curso de CSharp","Profe de .Net",new Date()),
      new Curso(3, "PYTHON", "Curso de Python","Profe de Python",new Date()),
      new Curso(4, "PHP", "Curso de PHP","Profe de PHP",new Date()),
      new Curso(5, "ANGULAR", "Curso de Angular","Profe de Angular",new Date()),
      new Curso(6, "REACT", "Curso de ReactJS","Profe de ReactJS",new Date()),
    ];
   }

   addCurso(curso: Curso) {
    curso.id = this.obtenerSiguienteId() + 1;
    this.cursoList.push(curso);
    }    
    updateCurso(curso: Curso) { 
      this.cursoList[this.cursoList.findIndex(x => x.id == curso.id)] = curso;
    }
    deleteCurso(curso: Curso) {
      this.cursoList.splice(this.cursoList.findIndex(x => x.id == curso.id), 1);
    }
    
    getCurso(id: number) {  
      return this.cursoList[this.cursoList.findIndex(x => x.id == id)];
    }
    getCursos() {
      return this.cursoList;
    }

    obtenerSiguienteId(): number {
      let max = 0;
      for (let i = 0; i < this.cursoList.length; i++) {
        if (this.cursoList[i].id > max)
          max = this.cursoList[i].id;
      }
      return max;
    }
  
}
