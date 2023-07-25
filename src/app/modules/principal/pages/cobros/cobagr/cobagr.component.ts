import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CuentaB,
  cabecera,
  cliente,
  clocal,
  detalle,
  facturas,
} from '../../../interfaces/Clases';
import { BancosServiceService } from '../../../services/bancos-service.service';
import { ClienteServiceService } from '../../../services/cliente-service.service';
import { FacturasServiceService } from '../../../services/facturas-service.service';
import { Router } from '@angular/router';
import { DetalleServiceService } from '../../../services/detalle-service.service';
import { ClienteLocalServiceService } from '../../../services/cliente-local-service.service';
import { CobroServiceService } from '../../../services/cobro-service.service';

@Component({
  selector: 'app-cobagr',
  templateUrl: './cobagr.component.html',
  styleUrls: ['./cobagr.component.scss'],
})
export class CobagrComponent implements OnInit {
  // Nombre del formulario de pago
  validateForm!: FormGroup;

  // ---------------- Variables ----------------
  // Id de cobro
  idCobro = 'PAG-CLI-0000';
  //Contadores
  x = 0;
  y = 0;
  contador = 1;
  // Fecha de cobro
  fecha: string = new Date().toDateString();
  // Total a cobrar
  totalCob = 0;

  // ------ Variables de Detalle Factura ------
  facturaSelec: any;
  idFac = 0;
  totalFac = 0;
  saldoFac = 0;
  pago = 0;
  totalPagarCre = 0;
  clienteSeleccionado: any = [];
  cliseleccionado : any;
  mensaje = '';
  mensajef = '';

  // --------- Objetos de cada clase ----------
  // Objeto de tipo cabecera
  cabecera: cabecera = {
    idPC: '',
    descripcionPC: '',
    fechaPC: '',
    totalPD: 0,
    cedulaCli: '',
    idCB: '',
  };
  // Objeto de tipo cliente
  cliente: cliente = {
    Identificacion: '',
    Nombre: '',
    FechaNacimiento: '',
    Direccion: '',
    Telefono: '',
    CorreoElectronico: '',
    Estado: true,
  };
  // Objeto de tipo detalle
  detalle: detalle = {
    idPD: '',
    saldoFac: 0,
    idCabecera: '0',
    numeroFac: 0,
    valorApagar: 0,
  };
  // Objeto cliente local

  clocal: clocal = {
    cedulaCli: '',
    nombresCli: '',
    totalPagarCre: 0,
    saldo: 0,
  };

  // ---------- Creamos las listas -----------
  listaCuentBan: CuentaB[] = [];
  ListarClientes: cliente[] = [];
  listaClientes: any[] = [];
  listaFacturas: facturas[] = [];
  ListarFacturas: facturas[] = [];
  ListarDetalles: detalle[] = [];
  ListarCabeceras: cabecera[] = [];

  // ------------ Listas Locales -------------

  // Constructor que llama a los servicios
  constructor(
    private bancoService: BancosServiceService,
    private clienteService: ClienteServiceService,
    private facturasService: FacturasServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private detalleService: DetalleServiceService,
    private clService: ClienteLocalServiceService,
    private CobroService: CobroServiceService
  ) {
    this.formCobro();
  }

  ngOnInit(): void {
    this.listarCuentasBancarias();
    this.getListClientes();
    this.listarCabeceras();
  }
  // Lista de Cuentas Bancarias
  listarCuentasBancarias() {
    this.bancoService.getCuentasBancarias2().subscribe(
      (data: any) => {
        this.listaCuentBan = <any>data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Lista de Clientes
  getListClientes() {
    this.clienteService.getClientes().subscribe(
      (data) => {
        this.ListarClientes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  listarCabeceras() {
    this.CobroService.getCobros().subscribe(
      (data) => {
        this.ListarCabeceras = <any>data;
        this.y = this.ListarCabeceras.length + 1;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  private formCobro() {
    this.validateForm = this.formBuilder.group({
      descripcionPC: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(/^[A-Za-z]+(\s{1}[A-Za-z]+)*$/),
        ],
      ],
      cedulaCli: ['', [Validators.required]],
      idCB: ['', [Validators.required]],
      pago: ['', [Validators.pattern(/^[^++--]+$/)]],
    });
  }
  submitForm(event: Event) {}

  // Cliente seleccionado con base local
  clienteSelect(e: any) {
    const valor = e.target.value;
    // console.log(valor);
    this.clienteService.getClienteS(valor).subscribe((r) => {
      this.cliseleccionado=r;
      // console.log(this.cliseleccionado)
    });
    this.facturasService.getfactura(valor).subscribe(
      (datos) => {
        datos.forEach((element: any) => {
          this.clienteSeleccionado.push(element);
          console.log(this.clienteSeleccionado);
        });
      },
      (error) => {
        console.log(error);
      }
    );
    this.idFac = 0;
    this.totalFac = 0;
    this.saldoFac = 0;
    this.clienteSeleccionado= [];
  }

  clienteSelect1(e: any) {
    const valor = e.target.value;
    console.log(valor);
    // this.facturasService.getfactura(valor).subscribe(
    //   (res) => {
    //     this.clienteSeleccionado = <any>res;
    //     console.log(this.clienteSeleccionado);
    //   },
    //   (err) => console.log(err)
    // );
    // this.idFac = 0;
    // this.totalFac = 0;
    // this.saldoFac = 0;
  }

  // seleccionarFactura1(facturas: any) {
  //   this.facturaSelec = facturas;
  //   this.idFac = this.facturaSelec.id;
  //   this.totalFac = this.facturaSelec.total;
  //   this.detalleService.getFactura(this.idFac).subscribe(
  //     (data) => {
  //       if (data == null) {
  //         this.saldoFac = this.totalFac;
  //       } else {
  //         this.detalle = <any>data;
  //         this.saldoFac = this.detalle.saldoFac;
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  seleccionarFactura(facturas: any) {
    this.facturaSelec = facturas;
    this.idFac = this.facturaSelec.IdFacturaCabecera;
    const fecha = this.facturaSelec.FechaFactura;
    const cliente = this.facturaSelec.IdentificacionCliente;
    const subtotal = this.facturaSelec.Subtotal;
    const iva = this.facturaSelec.Iva;
    this.totalFac = this.facturaSelec.Total;

    // console.log(
    //   'La factura seleccionada es: ' +
    //     this.idFac +
    //     ' cliente: ' +
    //     cliente +
    //     ' fecha: ' +
    //     fecha +
    //     ' subtotal: ' +
    //     subtotal +
    //     ' iva: ' +
    //     iva +
    //     ' total: ' +
    //     this.totalFac +
    //     ' fecha: ' +
    //     fecha
    // );
    this.detalleService.getFactura(this.idFac).subscribe(
      (data) => {
        if (data == null) {
          this.saldoFac = this.totalFac;
          // console.log('saldo por ser la tabla nula: ' + this.saldoFac);
        } else {
          this.detalle = <any>data;
          this.saldoFac = this.detalle.saldoFac;
          // console.log('saldo en la tabla que no es nula: ' + this.saldoFac);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  agregarDetalle() {
    const value = this.validateForm.value;
    if (value.pago == 0) return (this.mensaje = 'Digite un Número Válido');
    else if (value.pago <= this.saldoFac) {
      const ndetalle: detalle = {
        idPD: '',
        saldoFac: this.saldoFac - value.pago,
        idCabecera: this.idCobro + '' + this.y,
        numeroFac: this.idFac,
        valorApagar: value.pago,
      };
      this.validateForm.patchValue({ pago: '' });
      this.idFac = 0;
      this.totalFac = 0;
      this.saldoFac = 0;
      let existe =
        this.ListarDetalles.filter((d) => d.numeroFac === ndetalle.numeroFac)
          .length > 0;
      if (!existe) {
        this.ListarDetalles.push(ndetalle);
        this.totalCob = this.ListarDetalles.reduce(
          (acc, index) => acc + index.valorApagar,
          0
        );
        return (this.mensaje = 'Detalle Agregado');
      } else return (this.mensaje = 'La factura ya existe');
    } else {
      return (this.mensaje =
        'EL pago es mayor que saldo de la factura O seleccione una factura');
    }
  }
  eliminar(index: number) {
    this.ListarDetalles.splice(index, 1);
    this.totalCob = this.ListarDetalles.reduce(
      (acc, index) => index.valorApagar - acc,
      0
    );
  }

  Agregar(event: Event) {
    // console.log('hola henry');

    if (this.ListarDetalles.length > 0 && this.totalCob > 0) {
      const value = this.validateForm.value;
      // console.log(value.cedulaCli);
      let clienteSel = this.ListarClientes.find(
        (a) => a.Identificacion == value.cedulaCli
      );
      console.log('este es el cliente: ' + clienteSel?.Identificacion);
      let id = '' + clienteSel?.Identificacion;
      this.clService.getCliente(id).subscribe(
        (data) => {
          if (data == null) {
            this.x = 0;
            const ncliente = {
              cedulaCli: '' + clienteSel?.Identificacion,
              nombresCli: '' + clienteSel?.Nombre,
              totalPagarCre: this.totalPagarCre,
              saldo: this.x + this.totalCob,
            };
            // console.log('por aqui paso1');
            this.clService.addCliente(ncliente).subscribe();
          } else {
            this.clocal = <any>data;
            this.x = this.clocal.saldo;
            const ncliente = {
              cedulaCli: '' + clienteSel?.Identificacion,
              nombresCli: '' + clienteSel?.Nombre,
              totalPagarCre: this.totalPagarCre,
              saldo: this.x + this.totalCob,
            };

            this.clService.addCliente(ncliente).subscribe();
            // console.log('por aqui paso2');
          }
        },
        (error) => {
        }
      );
      if(value.descripcionPC=='' || value.idCb==''){
        alert("Faltan campos por llenar")
      }else{

      }
      this.ListarDetalles.forEach((detalle) => {
        this.detalleService.addDetalle(detalle).subscribe((response) => {});

      });
      // console.log('Se agrego los detalles correctamente')
      const cabeceran = {
        idPC: this.idCobro + '' + this.y,
        descripcionPC: '' + value.descripcionPC,
        fechaPC: '2023-07-26',
        totalPD: this.totalCob,
        cedulaCli: '' + value.cedulaCli,
        idCB: '' + value.idCB,
      };
      // console.log(cabeceran)

      this.CobroService.addCobro(cabeceran).subscribe();
      setTimeout(() => {
        this.router.navigate(['/sesion/cob/inicio']);
      }, 2300);
      return (this.mensajef = 'Cobro Guardado');
    } else {
      return (this.mensajef =
        'No se agrego ningun cobro O el TOTAL debe ser Mayor a O');
    }
  }
}
