import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServiciosComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  MensajeQuienesSomos =
    'Inversiones INGMAS es una empresa hondureña con una sólida trayectoria, estructurada en cuatro divisiones clave: ingeniería, mantenimiento, asesoría y suministros. Bajo nuestra reconocida marca FUMIGA, nos especializamos en fumigación y control integral de plagas, ofreciendo soluciones personalizadas y efectivas para diversos sectores, desde residencial hasta industrial.';
}
