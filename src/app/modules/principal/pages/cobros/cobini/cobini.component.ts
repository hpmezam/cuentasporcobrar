import { Component, OnInit } from '@angular/core';
import { cabecera } from '../../../interfaces/Clases';
import { CobroServiceService } from '../../../services/cobro-service.service';

@Component({
  selector: 'app-cobini',
  templateUrl: './cobini.component.html',
  styleUrls: ['./cobini.component.scss'],
})
export class CobiniComponent implements OnInit {
  // Lista de cabeceras
  listaCabeceras: cabecera[] = [];
  constructor(private cobroService: CobroServiceService) {}

  ngOnInit(): void {
    this.listarCabeceras();
  }

  listarCabeceras() {
    let longitud;
    this.cobroService.getCobros().subscribe(
      (data) => {
        this.listaCabeceras = <any>data;
        longitud = this.listaCabeceras.length;
      },
      (error) => {
        console.log('Error al obtener la lista de cabeceras');
      }
    );
  }
}
