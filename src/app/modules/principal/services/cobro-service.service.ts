import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cabecera } from '../interfaces/Clases';

@Injectable({
  providedIn: 'root',
})
export class CobroServiceService {
  url = 'https://appsdistrivuidas.azurewebsites.net/api/cabeceras/';
  constructor(private http: HttpClient) {}
  getCobros(): Observable<any> {
    return this.http.get(this.url);
  }
  //get Una CB
  getCobro(id: string) {
    return this.http.get(this.url + '/' + id);
  }
  getPagosCuentas(id: string) {
    return this.http.get(
      'https://appsdistrivuidas.azurewebsites.net/api/cuentab' + '/' + id
    );
  }
  //creat CB
  addCobro(cabecera: cabecera) {
    return this.http.post(this.url, cabecera);
  }
  //delete CB
  deleteCobro(id: string) {
    return this.http.delete(this.url + '' + id);
  }
  //edit CB
  editCuentasBancaria(id: string, cabecera: cabecera) {
    return this.http.put(this.url + '' + id, cabecera);
  }
}
