import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteServiceService {
  url = 'https://facturasapi202307161115.azurewebsites.net/api/FactClientesporcobrar';
  URL = 'https://facturasapi202307161115.azurewebsites.net/api/FactClientes';
  constructor(private http: HttpClient) {}
  getClientes(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  getCliente(id: string) {
    return this.http.get(this.url + '/' + id);
  }
  getClienteS(id: string) {
    return this.http.get(this.URL + '/' + id);
  }
}
