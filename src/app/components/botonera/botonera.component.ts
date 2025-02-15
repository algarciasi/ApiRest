import { Component, inject, Input } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { FormGroup } from '@angular/forms';

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
  @Input() usuariosForm!: FormGroup;

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


  /* saveUser(): void {
    if (!this.usuariosForm || this.usuariosForm.invalid) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }
  
    let usuario: Usuario = this.usuariosForm.value;

    if (this._id) {
      // Actualizar usuario
      this.usuariosService.update(usuario).subscribe({
        next: (response: Usuario) => {
          alert('Usuario actualizado correctamente: ' + response.first_name);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error al actualizar el usuario:', err);
          alert('Hubo un error al intentar actualizar el usuario.');
        }
      });
    } else {
      // Crear nuevo usuario
      this.usuariosService.insert(usuario).subscribe({
        next: (response: Usuario) => {
          alert('Usuario creado correctamente: ' + response.first_name);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error al crear el usuario:', err);
          alert('Hubo un error al intentar crear el usuario.');
        }
      });
    }
  }*/
  
}
