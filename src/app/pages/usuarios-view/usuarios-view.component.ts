import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { BotoneraComponent } from "../../components/botonera/botonera.component";

@Component({
  selector: 'app-usuarios-view',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './usuarios-view.component.html',
  styleUrl: './usuarios-view.component.css'
})
export class UsuariosViewComponent {

  usuariosService = inject(UsuariosService);
  activatedRoute = inject(ActivatedRoute);

  miUsuario !: Usuario;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let _id: string = params._id as string;
  
      this.usuariosService.getByIdWithObservable(_id).subscribe({
        next: (serie) => {
          this.miUsuario = serie;
        },
        error: (err) => {
          console.error('Error al llamar a la API:', err);
        }
      });
    });
  }
  

}
