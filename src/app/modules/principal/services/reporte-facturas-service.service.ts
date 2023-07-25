import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { facturaDet } from '../interfaces/Clases';

@Injectable({
  providedIn: 'root',
})
export class ReporteFacturasServiceService {
  url = 'https://appsdistrivuidas.azurewebsites.net/api/cabeceras/estado';
  constructor(private http: HttpClient) {}
  getFacturasTotal(): Observable<facturaDet> {
    return this.http
      .get<facturaDet>(
        'https://appsdistrivuidas.azurewebsites.net/api/cabeceras/'
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
  getFacturasId(id: string): Observable<facturaDet> {
    return this.http
      .get<facturaDet>(
        'https://appsdistrivuidas.azurewebsites.net/api/cabeceras/cuentab' +
          '/' +
          id
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getFacturasRango(
    id: string,
    startDate: string,
    endDate: string
  ): Observable<facturaDet> {
    const url = `https://appsdistrivuidas.azurewebsites.net/api/cabeceras/estado/rango/${id}/${startDate}/${endDate}`;
    return this.http.get<facturaDet>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
