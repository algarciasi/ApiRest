import { Routes } from '@angular/router';
import { UsuariosListComponent } from './pages/usuarios-list/usuarios-list.component';
import { UsuariosFormComponent } from './pages/usuarios-form/usuarios-form.component';
import { UsuarioCardComponent } from './components/usuario-card/usuario-card.component';
import { UsuariosService } from './services/usuarios.service';

export const routes: Routes = [
    {path:"", pathMatch: "full", redirectTo: "usuarios"},
    {path:"home", component: UsuariosListComponent},
    {path:"newUser", component: UsuariosFormComponent},
    {path:"updateUser", component: UsuariosService},
    {path:"user", component: UsuarioCardComponent},
    {path:"**", redirectTo: "Error 404"},

];
