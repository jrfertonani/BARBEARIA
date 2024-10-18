import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComandasService {

  URL = 'http://localhost:8080/comandas';

  constructor(private http: HttpClient) {}

}
