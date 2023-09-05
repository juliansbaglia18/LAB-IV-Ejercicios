import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent {
  mostrarBoton: boolean = true;
  showLogin: boolean = false;

  constructor(private router: Router) { }

  // irAPunto2() {
  //   this.router.navigate(['Punto2']);
  //   this.mostrarBoton = false;
  // }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event): void {
  //   // Verifica si el usuario ha desplazado hasta abajo
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     this.showLogin = true; // Muestra el componente Login
  //   } else {
  //     this.showLogin = false; // Oculta el componente Login
  //   }
  // }

  ngOnInit() {
    // Utiliza setTimeout para navegar automáticamente después de 3 segundos
    setTimeout(() => {
      this.router.navigate(['/login']); // Navega a la ruta '/login'
    }, 3000); // 3000 milisegundos (3 segundos)
  }


}
