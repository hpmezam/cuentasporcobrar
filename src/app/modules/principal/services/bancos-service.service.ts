import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuentaB } from '../interfaces/Clases';

@Injectable({
  providedIn: 'root',
})
export class BancosServiceService {
  url = 'https://appsdistrivuidas.azurewebsites.net/api/cuentab/';
  constructor(private http: HttpClient) {}
  //get Cuentas bancarias
  getCuentasBancarias(): Observable<any> {
    return this.http.get(this.url);
  }
  getCuentasBancarias2(): Observable<any> {
    return this.http.get('https://appsdistrivuidas.azurewebsites.net/api/cuentab/cc');
  }
  //get Una CB
  getCuentaBancaria(id: string) {
    return this.http.get(this.url + '/' + id);
  }
  //creat CB
  addCuentasBancaria(CuentaB: CuentaB) {
    return this.http.post(this.url, CuentaB);
  }
  //delete CB
  deleteCuentasBancaria(id: string) {
    return this.http.delete(this.url + '' + id);
  }
  //edit CB
  editCuentasBancaria(id: string, CuentaB: CuentaB) {
    return this.http.put(this.url + '' + id, CuentaB);
  }
}
