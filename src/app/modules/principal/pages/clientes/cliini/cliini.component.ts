import { Component, OnInit } from '@angular/core';
import { clienteP } from '../../../interfaces/Clases';
import { ClienteServiceService } from '../../../services/cliente-service.service';

@Component({
  selector: 'app-cliini',
  templateUrl: './cliini.component.html',
  styleUrls: ['./cliini.component.scss'],
})
export class CliiniComponent implements OnInit {
  // lista de clientes desde la API
  listaClientes: any[] = [];

  // lista de cliente para prueba locales
  listaCliLocal: clienteP[] = [
    {
      identification: '1004192371',
      nombre: 'Henry Meza',
      fechaNacimiento: '12-12-1998',
      direccion: 'Bolivar y Sucre',
      telefono: '0123456789',
      correoElectronico: 'henrymeza1@hotmail.com',
      estado: true,
      idTipo: 1,
    },
    {
      identification: '1003452345',
      nombre: 'Eduardo Páez',
      fechaNacimiento: '12-12-1996',
      direccion: 'Rocafuerte y Salinas',
      telefono: '0902356745',
      correoElectronico: 'eduarp@gmail.com',
      estado: true,
      idTipo: 1,
    },
  ];

  constructor(private clienteService: ClienteServiceService) {}

  ngOnInit(): void {
    //this.obtenerListClientes();
    this.getListClientes();
  }

  // listarClientes() {
  //   this.clienteService.getClientes().subscribe((datos) => {
  //     datos.forEach((element: any) => {
  //       this.listaClientes.push(element);
  //     });
  //   });
  // }
  getListClientes() {
    this.clienteService.getClientes().subscribe((data) => {
      this.listaClientes = data;
    });
  }

  getListClientesLocal() {
    this.clienteService.getClientes().subscribe((data) => {
      this.listaClientes = data;
    });
  }

}
