import { Component, Input } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-usuario-card',
  standalone: true,
  imports: [],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {

  @Input() miUsuario!: Usuario;

} 
