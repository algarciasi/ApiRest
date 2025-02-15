import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-usuarios-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './usuarios-form.component.html',
  styleUrl: './usuarios-form.component.css'
})
export class UsuariosFormComponent {

  router = inject(Router);
  usuariosServices = inject(UsuariosService);
  activatedRoute = inject(ActivatedRoute);

  usuariosForm : FormGroup;
  tipo: string = "Insertar";
  miUsuario: Usuario | null = null;

  constructor(){
    this.tipo = "Nuevo";

    this.usuariosForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    }, 
      []);

  }

  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params: any) => {
      let _id: string = params._id as string;
  
      if (_id) {
        this.tipo = "Actualizar";
        
        this.usuariosServices.getByIdWithObservable(_id).subscribe({
          next: (usuarioResponse: Usuario) => {
            this.usuariosForm = new FormGroup({
              _id: new FormControl(usuarioResponse._id, []),
              first_name: new FormControl(usuarioResponse.first_name, [Validators.required]),
              last_name: new FormControl(usuarioResponse.last_name, [Validators.required]),
              email: new FormControl(usuarioResponse.email, [Validators.required]),
              image: new FormControl(usuarioResponse.image, [Validators.required])
            });
          },
          error: (err) => {
            console.error('Error al obtener el usuario:', err);
          }
        });
      }
    });
  }
  
  getDataForm(): void {
    if (this.usuariosForm.invalid) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    let usuario: Usuario = this.usuariosForm.value;

    if (usuario._id) {
      // Si existe `_id`, actualiza el usuario
      this.usuariosServices.update(usuario).subscribe({
        next: (response: Usuario) => {
          alert('Usuario actualizado correctamente: ' + response.first_name);
          this.router.navigate(['/home']); // Redirigir tras actualizar
        },
        error: (err) => {
          console.error('Error al actualizar el usuario:', err);
          alert('Hubo un error al intentar actualizar el usuario.');
        }
      });
    } else {
      // Si no tiene `_id`, crea un nuevo usuario
      this.usuariosServices.insert(usuario).subscribe({
        next: (response: Usuario) => {
          alert('Usuario creado correctamente: ' + response.first_name);
          this.router.navigate(['/home']); // Redirigir tras creación
        },
        error: (err) => {
          console.error('Error al crear el usuario:', err);
          alert('Hubo un error al intentar crear el usuario.');
        }
      });
    }
  }
  

}
