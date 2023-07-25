import { Component, OnInit } from '@angular/core';
import { ClienteLocalServiceService } from '../../../services/cliente-local-service.service';
import { ReporteFacturasServiceService } from '../../../services/reporte-facturas-service.service';
import { ExporterService } from '../../../services/exporter.service';
import { facturaDet } from '../../../interfaces/Clases';
import { FormGroup, Validators } from '@angular/forms';
import { PdfserviceService } from 'src/app/modules/principal/services/pdfservice.service';
import { PdfTemplateP } from 'src/app/modules/principal/pages/pagos/pagini/pdf-templateP';

@Component({
  selector: 'app-pagini',
  templateUrl: './pagini.component.html',
  styleUrls: ['./pagini.component.scss'],
})
export class PaginiComponent implements OnInit {
  ListarClientes: any;
  ListarFacturas: facturaDet[] = [];
  selectedValue = '';
  mensaje = '';
  estado!: FormGroup;
  formBuilder: any;

  constructor(
    private clienteLocalService: ClienteLocalServiceService,
    private reporteFacturasService: ReporteFacturasServiceService,
    private exporterService: ExporterService
  ) {
  }

  ngOnInit(): void {
    this.listaFacturas();
    this.listarClientes();

  }

  listaFacturas() {
    this.reporteFacturasService.getFacturasTotal().subscribe((response) => {
      this.ListarFacturas = <any>response;
      return (this.mensaje = 'Lista total de cobros');
    });
  }

  exportAsXLSX() {
    if (this.ListarFacturas.length == 0 || this.ListarFacturas.length == null) {
      return (this.mensaje = 'El cliente no tiene pagos');
    } else {
      this.exporterService.exportToExcel(this.ListarFacturas, 'my_export');
      return (this.mensaje = 'Lista de cobros de: ' + this.selectedValue);
    }
  }

  clienteSelect(e: any) {
    const valor = e.target.value;
    console.log('El client seleccionado es de nombre: '+valor)
    if (valor == 'Todos los Clientes') {
      this.listaFacturas();
    } else {
      this.reporteFacturasService.getFacturasId(valor).subscribe((response) => {
        this.ListarFacturas = <any>response;
        if (
          this.ListarFacturas.length == 0 ||
          this.ListarFacturas.length == null
        ) {
          console.log(this.ListarFacturas.length);
          return (this.mensaje = 'El cliente no tiene pagos');
        } else {
          return (this.mensaje = 'Lista de cobros de: ' + valor);
        }
      });
    }
  }

  // buscarFacturas(event: Event) {
  //   if (
  //     this.selectedValue == '' ||
  //     this.selectedValue == '---Todos Los Cobros----'
  //   ) {
  //     this.listaFacturas();
  //   } else {
  //     this.reporteFacturasService
  //       .getFacturasId(this.selectedValue)
  //       .subscribe((response) => {
  //         this.ListarFacturas = <any>response;
  //         if (
  //           this.ListarFacturas.length == 0 ||
  //           this.ListarFacturas.length == null
  //         ) {
  //           console.log(this.ListarFacturas.length);
  //           return (this.mensaje = 'El cliente no tiene pagos');
  //         } else {
  //           return (this.mensaje = 'Lista de cobros de: ' + this.selectedValue);
  //         }
  //       });
  //   }
  // }

  listarClientes() {
    this.clienteLocalService.getClientes().subscribe(
      (data) => {
        this.ListarClientes = <any>data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
//
  generarPDF() {
    PdfTemplateP.generatePDF(this.ListarFacturas);
  }

}
