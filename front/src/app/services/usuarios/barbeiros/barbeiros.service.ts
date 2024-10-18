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

}
