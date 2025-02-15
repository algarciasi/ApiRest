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

  getByIdWithObservable(_id: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseUrl}/${_id}`);
  }

  insert(usuario : Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.baseUrl, usuario);
  }

  update(usuario : Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(this.baseUrl+"/"+usuario._id, usuario);
  }

  delete(_id: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseUrl}/${_id}`);
  }

}
