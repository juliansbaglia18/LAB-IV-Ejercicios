import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';


const routes: Routes = [
  { path: '', component: CalculadoraComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'error', component: ErrorComponent },
  {path: 'login', component: LoginComponent},
  { path: '**', component: ErrorComponent } // Ruta comodín para el componente de error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
