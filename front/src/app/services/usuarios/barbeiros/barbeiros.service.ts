import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barbeiros } from '../../../models/usuarios/Barbeiros';

@Injectable({
  providedIn: 'root'
})
export class BarbeirosService {

  URL = 'http://localhost:8080/barbeiros';

  constructor(private http: HttpClient) {}



  List():Observable<Barbeiros[]>{
    return this.http.get<Barbeiros[]>(this.URL);
  }

  crearBarbeiro(barbeiro: Barbeiros):Observable<Barbeiros>{
    return this.http.post<Barbeiros>(this.URL,barbeiro);
  }

  delete(id:number):Observable<Barbeiros>{
    return this.http.delete<Barbeiros>(`${this.URL}/${id}`)
  }

  finsById(id: number):Observable<Barbeiros>{
    return this.http.get<Barbeiros>(`${this.URL}/${id}`)
  }

  editBarbeiro(barbeiro: Barbeiros):Observable<Barbeiros>{
    const url = `${this.URL}/${barbeiro.idBarbeiro}`
    return this.http.put<Barbeiros>(url,barbeiro)
  }

}

