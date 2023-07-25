import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacturasServiceService {
  url = 'https://facturasapi202307161115.azurewebsites.net/api/FactClientesporcobrar';
  constructor(private http: HttpClient) {}
  getfactura(id: string):  Observable<any>{
    return this.http.get<any>(this.url + '/' + id);
  }

  // private url: string = 'https://facturasapi202307161115.azurewebsites.net/api/FactClientes/Facturas/1701507253';
  // // private url: string = 'https://api.escuelajs.co/api/v1/products';
  // constructor(private hhtp: HttpClient) {}
  // getfactura(): Observable<any> {
  //   return this.hhtp.get<any>(this.url);
  // }
}
