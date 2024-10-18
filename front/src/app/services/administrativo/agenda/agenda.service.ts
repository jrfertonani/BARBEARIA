import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  URL = 'http://localhost:8080/agenda';

  constructor(private http: HttpClient) {}
}

