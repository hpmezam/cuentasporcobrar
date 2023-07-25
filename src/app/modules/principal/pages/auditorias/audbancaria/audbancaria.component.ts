import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuditoriaService } from '../../../services/auditoria.service';
import { auditoria } from '../../../interfaces/Clases';

@Component({
  selector: 'app-audbancaria',
  templateUrl: './audbancaria.component.html',
  styleUrls: ['./audbancaria.component.scss'],
})
export class AudbancariaComponent implements OnInit {
  estado!: FormGroup;
  ListarAuditorias: auditoria[] = [];
  mensaje = '';
  constructor(
    private formBuilder: FormBuilder,
    private audit: AuditoriaService
  ) {
    this.formCobro();
  }

  ngOnInit(): void {}
  private formCobro() {
    this.estado = this.formBuilder.group({
      fechaIni: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
    });
  }

  getAuditorias() {
    const value = this.estado.value;
    const inicio = new Date(value.fechaIni);
    const fin = new Date(value.fechaFin);
    // fin.setDate(fin.getDate() + 1);
    const today = new Date();

    if (inicio < today || fin < today) {
      this.audit
        .getAuditoria(value.fechaIni, value.fechaFin)
        .subscribe((response) => {
          this.ListarAuditorias = <any>response;
          // console.log(this.ListarAuditorias);
          if (this.ListarAuditorias.length == 0) {
            this.mensaje =
              'No hay reportes de: ' + value.fechaIni + ' & ' + value.fechaFin;
          } else {
            this.mensaje =
              'Estado de cuenta del: ' +
              value.fechaIni +
              ' & ' +
              value.fechaFin;
          }
        });
    } else {
      this.mensaje = 'Ingrese Fechas Correctas';
      this.ListarAuditorias = [];
    }
  }
}
