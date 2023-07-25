import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { facturaDet } from '../../../interfaces/Clases';
import { ClienteLocalServiceService } from '../../../services/cliente-local-service.service';
import { ReporteFacturasServiceService } from '../../../services/reporte-facturas-service.service';
import { ExporterService } from '../../../services/exporter.service';
import { PdfserviceService } from 'src/app/modules/principal/services/pdfservice.service';
import { PdfTemplate } from 'src/app/modules/principal/pages/deudores/deuini/pdf-template';

@Component({
  selector: 'app-deuini',
  templateUrl: './deuini.component.html',
  styleUrls: ['./deuini.component.scss'],
})
export class DeuiniComponent implements OnInit {
  ListarClientes: any;
  estado!: FormGroup;
  selectedValue = '';
  ListarFacturas: facturaDet[] = [];
  mensaje = '';

  constructor(
    private ClienteService: ClienteLocalServiceService,
    private formBuilder: FormBuilder,
    private reporteFacturasService: ReporteFacturasServiceService,
    private exporterService: ExporterService
  ) {
    this.formCobro();
  }

  ngOnInit(): void {
    this.listarClientes();
  }

  private formCobro() {
    this.estado = this.formBuilder.group({
      fechaIni: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      cedulaCli: ['', [Validators.required]],
    });
  }

  exportAsXLSX() {
    if (this.ListarFacturas.length == 0 || this.ListarFacturas.length == null) {
      return (this.mensaje = 'No hay reportes');
    } else {
      return this.exporterService.exportToExcel(
        this.ListarFacturas,
        'my_export'
      );
    }
  }
  clienteSelect(e: any) {
    const value = this.estado.value;
    const cedula = value.cedulaCli;
    const inicio = new Date(value.fechaIni);
    const fin = new Date(value.fechaFin);
    const today = new Date();
    if (inicio < today || fin < today) {
      this.reporteFacturasService
        .getFacturasRango(cedula, value.fechaIni, value.fechaFin)
        .subscribe((response) => {
          this.ListarFacturas = <any>response;
          if (this.ListarFacturas.length == 0) {
            this.mensaje =
              'No hay reportes entre: ' +
              value.fechaIni +
              ' & ' +
              value.fechaFin;
          } else {
            this.mensaje =
              'Estado de cuenta entre: ' +
              value.fechaIni +
              ' & ' +
              value.fechaFin;
          }
        });
    } else {
      this.mensaje = 'Ingrese Fechas Correctas';
      this.ListarFacturas = [];
    }
  }
  listaFacturasFe(event: Event) {
    const value = this.estado.value;
    const inicio = new Date(value.fechaIni);
    const fin = new Date(value.fechaFin);
    const today = new Date();
    if (inicio < today || fin < today) {
      this.reporteFacturasService
        .getFacturasRango(value.cedulaCli, value.fechaIni, value.fechaFin)
        .subscribe((response) => {
          this.ListarFacturas = <any>response;
          if (this.ListarFacturas.length == 0) {
            this.mensaje =
              'No hay reportes de: ' + value.fechaFin + ' A ' + value.fechaIni;
          } else {
            this.mensaje =
              'Estado de cuenta del: ' +
              value.fechaFin +
              ' A ' +
              value.fechaIni;
          }
        });
    } else {
      this.mensaje = 'Ingrese Fechas Correctas';
      this.ListarFacturas = [];
    }
  }

  listarClientes() {
    this.ClienteService.getClientes().subscribe(
      (data) => {
        this.ListarClientes = <any>data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  generarPDF() {
    PdfTemplate.generatePDF(this.ListarFacturas);
  }
}
