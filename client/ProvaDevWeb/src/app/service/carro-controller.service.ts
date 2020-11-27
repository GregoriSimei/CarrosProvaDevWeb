import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Carro } from '../models/Carro';

@Injectable({
  providedIn: 'root'
})
export class CarroControllerService {

  URLBase = "http://localhost:1234/carro";

  constructor(private http: HttpClient) { }

  list(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.URLBase);
  }

  cadastrar(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.URLBase, carro);
  }

}
