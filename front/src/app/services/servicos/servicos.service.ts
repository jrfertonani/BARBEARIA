import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicos } from '../../models/servicos/Servicos';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {


  URL = 'http://localhost:8080/servicos';

  constructor(private http: HttpClient) {}


  List():Observable<Servicos[]>{
    return this.http.get<Servicos[]>(this.URL);
  }

  createSErvico(servico: Servicos):Observable<Servicos>{
    return this.http.post<Servicos>(this.URL,servico);
  }

  delete(id: number):Observable<Servicos>{
    return this.http.delete<Servicos>(`${this.URL}/${id}`);
  }
}
