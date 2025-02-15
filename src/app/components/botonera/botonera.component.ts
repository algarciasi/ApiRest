import { Component, inject, Input } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';

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

  deleteUser(_id: string): void {
    let confirmacion = confirm('¿Está seguro de que quiere eliminar el usuario: ' + _id);
    
    if (confirmacion) {
      this.usuariosService.delete(_id).subscribe({
        next: (response: any) => {
          // Esto es particular de la API
          if (response._id) {
            alert('Se ha borrado correctamente el usuario ' + response.first_name);
            
            if (this.parent === 'view') {
              this.router.navigate(['/home']);
            } else if (this.parent === 'card') {
              location.reload();
            }
          }
        },
        error: (err) => {
          console.error('Error al eliminar el usuario:', err);
          alert('Hubo un error al intentar eliminar el usuario.');
        }
      });
    }
  }
  


}
