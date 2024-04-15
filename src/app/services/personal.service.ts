import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }
  private API_PERSONAL="http://localhost:3000/personal"

  //LEER
  getPersonal():Observable <any>{
    return(this.http.get(this.API_PERSONAL))

  }
  getPersona(id:any):Observable<any>{
    return this.http.get(`${this.API_PERSONAL}/${id}`)

  }
  //GUARDAR
  postPersonal(persona: any):Observable<any>{
    return this.http.post(this.API_PERSONAL, persona)
  }
  //EDITAR
  putPersonal(persona: any):Observable<any>{
    return this.http.put(`${this.API_PERSONAL}/${persona.id}`, persona)
    //return this.http.put(`${this.API_PERSONAL}/${persona.id}`, persona)
  }
  //ELIMINAR
  deletePersonal(id: any): Observable<any>{
    return this.http.delete(`${this.API_PERSONAL}/${id}`)
  }
}
