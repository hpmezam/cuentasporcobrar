import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clocal } from '../interfaces/Clases';

@Injectable({
  providedIn: 'root',
})
export class ClienteLocalServiceService {
  url = 'https://appsdistrivuidas.azurewebsites.net/api/cliente/';
  constructor(private http: HttpClient) {}
  getClientes(): Observable<any> {
    return this.http.get(this.url);
  }
  //get Una CB
  getCliente(id: string) {
    return this.http.get(this.url + '/' + id);
  }
  //creat CB
  addCliente(clocal: clocal) {
    return this.http.post(this.url, clocal);
  }
}
