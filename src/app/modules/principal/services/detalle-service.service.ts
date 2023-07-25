import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { detalle } from '../interfaces/Clases';

@Injectable({
  providedIn: 'root',
})
export class DetalleServiceService {
  url = 'https://appsdistrivuidas.azurewebsites.net/api/detalles/';
  constructor(private http: HttpClient) {}
  getDetalles(): Observable<any> {
    return this.http.get(this.url);
  }
  getDetalle(id: string) {
    return this.http.get(this.url + '/' + id);
  }
  getFactura(id: number) {
    return this.http.get(
      'https://appsdistrivuidas.azurewebsites.net/api/detalles/idFac' + '/' + id
    );
  }
  //creat CB
  addDetalle(detalle: detalle) {
    return this.http.post(this.url, detalle);
  }
  //delete CB
  deleteCobro(id: string) {
    return this.http.delete(this.url + '' + id);
  }
}
