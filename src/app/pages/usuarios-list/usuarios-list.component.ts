import { UsuariosService } from './../../services/usuarios.service';
import { Component, inject } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioCardComponent } from "../../components/usuario-card/usuario-card.component";
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [UsuarioCardComponent, NgxPaginationModule],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.css'
})
export class UsuariosListComponent {

  arrUsuarios: Usuario[];
  usuarioService = inject(UsuariosService);

  usuariosPaginados: Usuario[] = [];
  paginaActual: number = 1;
  usuariosPorPagina: number = 6;

  constructor(){
    this.arrUsuarios =[];
  }

  ngOnInit(): void{
    this.usuarioService.getAllWithObservables().subscribe((data: any) => {
      this.arrUsuarios = data.results;
      this.cambiarPagina(1);
    });
  }

  cambiarPagina(pagina: number): void {
    this.paginaActual = pagina;
    let inicio = (pagina - 1) * this.usuariosPorPagina;
    let fin = inicio + this.usuariosPorPagina;
    this.usuariosPaginados = this.arrUsuarios.slice(inicio, fin);
  }

}
