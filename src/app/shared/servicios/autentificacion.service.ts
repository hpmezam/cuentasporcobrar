// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//   private apiUrl = 'http://20.163.192.189:8080/api/login';

//   constructor(private http: HttpClient) { }

//   login(username: string, password: string, modName: string): Observable<any> {
//     const url = `${this.apiUrl}?user_username=${username}&user_password=${password}&mod_name=${modName}`;
//     const headers = new HttpHeaders()
//       .set('Content-Type', 'application/json');

//     return this.http.get<any>(url, { headers: headers });
//   }
// }




import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutentificacionService {
  private ingresar: boolean = false;
  constructor() {}
  public ingresarAplicativo(obj: any): boolean {
    this.ingresar = obj.userName == 'henrym' && obj.password == '123henry';
    return this.ingresar;
  }

  public habilitarLogeo() {
    return this.ingresar;
  }
}
