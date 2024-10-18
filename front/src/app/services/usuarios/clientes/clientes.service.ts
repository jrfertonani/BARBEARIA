import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  URL = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}




}
