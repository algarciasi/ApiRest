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
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
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
          next: (usuario: Usuario) => {
            this.miUsuario = usuario;
          },
          error: (err) => {
            console.error('Error al obtener el usuario:', err);
          }
        });
      }
    });
  }


  getDataForm() {

  }
  

}
