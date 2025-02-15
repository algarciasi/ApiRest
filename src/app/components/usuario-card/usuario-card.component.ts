import { Component, Input } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { BotoneraComponent } from "../botonera/botonera.component";

@Component({
  selector: 'app-usuario-card',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {

  @Input() miUsuario!: Usuario;

} 
