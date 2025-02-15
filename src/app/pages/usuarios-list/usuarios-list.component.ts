import { UsuariosService } from './../../services/usuarios.service';
import { Component, inject } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.css'
})
export class UsuariosListComponent {

  arrUsuarios: Usuario[];
  usuarioService = inject(UsuariosService);

  constructor(){
    this.arrUsuarios =[];
  }

  ngOnInit(): void{
    this.usuarioService.getAllWithObservables().subscribe((data: Usuario[]) => {
      this.arrUsuarios = data;
    });
  }

}
