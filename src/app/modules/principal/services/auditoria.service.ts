import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auditoria } from '../interfaces/Clases';

@Injectable({
  providedIn: 'root',
})
export class AuditoriaService {
  constructor(private http: HttpClient) {}
  getAuditoria(
    startDate: string,
    endDate: string
  ): Observable<auditoria> {
    const url = `https://appsdistrivuidas.azurewebsites.net/api/auditoria?startDate=${startDate}&endDate=${endDate}`;
    return this.http.get<auditoria>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
