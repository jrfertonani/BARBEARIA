import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from '../../../models/administrativoModels/Agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  URL = 'http://localhost:8080/agenda';

  constructor(private http: HttpClient) {}


  List():Observable<Agenda[]>{
    return this.http.get<Agenda[]>(this.URL);
  }

  createAgenda(agenda: Agenda):Observable<Agenda>{
    return this.http.post<Agenda>(this.URL,agenda);
  }
}
