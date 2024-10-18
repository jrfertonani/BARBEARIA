import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarbeirosService {

  URL = 'http://localhost:8080/barbeiros';

  constructor(private http: HttpClient) {}


}
