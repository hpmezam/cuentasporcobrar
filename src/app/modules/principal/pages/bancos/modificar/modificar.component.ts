import { Component, OnInit } from '@angular/core';
import { CuentaB } from '../../../interfaces/Clases';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BancosServiceService } from '../../../services/bancos-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  cuentaB: CuentaB = {
    idCB: '',
    nombreCB: '',
    entidadCB: '',
    descripcionCB: '',
    estadoCB: true,
  };

  validateForm!: FormGroup;
  nombreControl = new FormControl('');

  constructor(
    private bancoService: BancosServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.formulario();
  }
  ngOnInit(): void {
    this.sacarId();
  }

  cuentaBForm = new FormGroup({
    nombreCB: this.nombreControl,
  });

  formulario() {
    this.validateForm = this.formBuilder.group({
      nombreCB: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(/^[A-Za-z]+(\s{1}[A-Za-z]+)*$/),
        ],
      ],
      entidadCB: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(/^[A-Za-z]+(\s{1}[A-Za-z]+)*$/),
        ],
      ],
      descripcionCB: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(/^[A-Za-z]+(\s{1}[A-Za-z]+)*$/),
        ],
      ],
      estadoCB: [null, [Validators.required]],
    });
  }

  Modificar(event: Event) {
    this.bancoService
      .editCuentasBancaria(this.cuentaB.idCB, this.cuentaB)
      .subscribe(
        (res) => {
          this.router.navigate(['/sesion/ban/inicio']);
        },
        (err) => console.log(err)
      );
  }

  sacarId() {
    const id_entrada = this.activatedRoute.snapshot.params['id'];
    if (id_entrada) {
      this.bancoService.getCuentaBancaria(id_entrada).subscribe(
        (res) => {
          this.cuentaB = <any>res;
        },
        (err) => console.log(err)
      );
    }
  }
}
