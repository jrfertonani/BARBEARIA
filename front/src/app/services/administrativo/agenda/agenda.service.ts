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


  createAgenda(agenda: Agenda):Observable<Agenda>{
    return this.http.post<Agenda>(this.URL,agenda);
  }

  List():Observable<Agenda[]>{
    return this.http.get<Agenda[]>(this.URL);
  }

  findById(id: number):Observable<Agenda>{
    return this.http.get<Agenda>(`${this.URL}/${id}`)
  }

  editAgenda(agenda : Agenda):Observable<Agenda>{
     const url = `${this.URL}/${agenda.idAgendamento}`
    return this.http.put<Agenda>(url,agenda);
  }

  delete(id:number):Observable<Agenda>{
    return this.http.delete<Agenda>(`${this.URL}/${id}`)
  }

}
