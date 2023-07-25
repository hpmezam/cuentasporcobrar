import { Component, OnInit } from '@angular/core';
import { CuentaB } from '../../../interfaces/Clases';
import { BancosServiceService } from '../../../services/bancos-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  p: number = 1;
  ListarCuentas: CuentaB[] = [];

  listaCuentaBancaria: CuentaB[] = [];
  constructor(
    private bancoService: BancosServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listarCuentasBancarias();
  }

  listarCuentasBancarias() {
    this.bancoService.getCuentasBancarias().subscribe(
      (data: any) => {
        this.listaCuentaBancaria = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Eliminar(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta cuenta bancaria?')) {
      this.bancoService.deleteCuentasBancaria(id).subscribe(
        (res) => {
          this.listarCuentasBancarias();
        },
        (err) => console.log(err)
      );
    }
  }
}
