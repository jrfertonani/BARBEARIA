import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comanda } from '../../../models/administrativoModels/Comanda';

@Injectable({
  providedIn: 'root'
})
export class ComandasService {

  URL = 'http://localhost:8080/comandas';

  constructor(private http: HttpClient) {}

  List():Observable<Comanda[]>{
    return this.http.get<Comanda[]>(this.URL);
  }

}
