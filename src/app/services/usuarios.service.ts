import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  httpClient = inject(HttpClient);
  private baseUrl : string = 'https://peticiones.online/api/users';

  constructor() { }

  getAllWithObservables() : Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.baseUrl);
    }
}
