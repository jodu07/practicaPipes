import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombreEmpresa = 'jhonnatan dussán'
  titulo = 'paquetes';
  fecha = new Date();
  precio = 200;
  mes = '/MES'; 


  /*paquetes = {titulo: 'Básico', pecio: 100, mes: 'mes', d1: 'Redes Sociales', d2: 'Branding', d3: 'Diseño de imagen', d4:'-'}*/

  paquetes = [
    {
      titulo: 'Básico', 
      precio: 100, 
      mes: 'mes', 
      d1: 'Redes Sociales', 
      d2: 'Branding', 
      d3: 'Diseño de imagen', 
      d4:'-'
    },
    {
      titulo: 'Recomendado', 
      precio: 200, 
      mes: 'mes', 
      d1: 'Redes Sociales', 
      d2: 'Branding', 
      d3: 'Video', 
      d4:'Diseño de imagen'
    },
    {
      titulo: 'Avanzado', 
      precio: 300, 
      mes: 'mes', 
      d1: 'Redes Sociales', 
      d2: 'Branding', 
      d3: 'Imagen/Video', 
      d4:'Community Manager'
    }
  ];
}
