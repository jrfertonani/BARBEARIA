import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {


  URL = 'http://localhost:8080/servicos';

  constructor(private http: HttpClient) {}
}
