import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  constructor(private http: HttpClient) { }
  private API_NOSOTROS="https://randomuser.me/api/?results=12";

  getNosotros():Observable<any>{
    return this.http.get(this.API_NOSOTROS)
  }
}
