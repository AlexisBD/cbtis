import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AlumnoService {

  public alumnoData:any = {};
  constructor() { }

  setAlumno(alumno){
    this.alumnoData = alumno;
  }

  getAlumno(){
    return this.alumnoData;
  }
}
