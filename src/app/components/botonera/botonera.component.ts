import { Component, inject, Input } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {


  usuariosService = inject (UsuariosService);
  router = inject(Router);

  @Input() _id : string;
  @Input() parent : string;

  constructor(){
    this._id = "";
    this.parent ="";
  }

  deleteUser(_id: string) {
  }


}
