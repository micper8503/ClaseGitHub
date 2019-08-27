import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Calculadora-Michael Perez';
  
  deshabilitado = true;
  numero1 = 0;
  numero2 = 0;
  valor1:number;
  valor2:number;
 

  constructor(){
  setTimeout(() => {
  this.deshabilitado = false;
  }, 3000)
  }

  
}
