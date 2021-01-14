import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlumnoService } from './../../service/alumno.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alumno_datos: {
    'nombre':'',
    'contraseña': ''
  }

  nombre: string

  constructor(
    //public alumnoService = AlumnoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


 public alumnoForm = new FormGroup({
    name: new FormControl(),
    contraseña: new FormControl(),
  });


  alumno(){
    console.log( this.alumnoForm.value.name);
    console.log( this.alumnoForm.value.contraseña);
    
    this.nombre = this.alumnoForm.value.name

    console.log('El valor de a es: ', this.nombre);

    
  
    /*
    [routerLink]="['./home']"
    */
  }
}
