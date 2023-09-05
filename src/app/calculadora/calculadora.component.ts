import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  constructor(private router: Router) {}
  mostrarBoton: boolean = true;
  title = 'ejercicios';
  public edadUno: number = 0;
  public edadDos: number = 0;
  public promedio: number = 0;
  public suma: number = 0;

  calcular() {
    this.promedio = (this.edadUno + this.edadDos) / 2;
    this.suma = this.edadUno + this.edadDos;
  }

  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }

  irAPunto2() {
    this.router.navigate(['/bienvenido']);
    this.mostrarBoton = false;
  }

}
