import { UsuariosViewComponent } from './pages/usuarios-view/usuarios-view.component';
import { Routes } from '@angular/router';
import { UsuariosListComponent } from './pages/usuarios-list/usuarios-list.component';
import { UsuariosFormComponent } from './pages/usuarios-form/usuarios-form.component';
import { UsuarioCardComponent } from './components/usuario-card/usuario-card.component';
import { UsuariosService } from './services/usuarios.service';

export const routes: Routes = [
    {path:"", pathMatch: "full", redirectTo: "home"},
    {path:"home", component: UsuariosListComponent},
    {path:"newUser", component: UsuariosFormComponent},
    {path:"update/user/:_id", component: UsuariosFormComponent},
    {path:"user/:_id", component: UsuariosViewComponent},
    {path:"**", redirectTo: "Error 404"},

];
