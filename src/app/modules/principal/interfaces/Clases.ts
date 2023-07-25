export interface CuentaB {
  idCB: string;
  nombreCB: string;
  entidadCB: string;
  descripcionCB: string;
  estadoCB: boolean;
}

export interface cabecera {
  idPC: string;
  descripcionPC: string;
  fechaPC: string;
  totalPD: number;
  cedulaCli: string;
  idCB: string;
}

export interface clocal {
  cedulaCli: string;
  nombresCli: string;
  totalPagarCre: number;
  saldo: number;
}

export interface detalle {
  idPD: string;
  saldoFac: number;
  idCabecera: string;
  numeroFac: number;
  valorApagar: number;
}

export interface facturaDet {
  idPC: string;
  descripcionPC: string;
  fechaPC: string;
  idCB: string;
  cedulaCli: string;
  totalPD: number;
  detalles: detalleFac[];
}

export interface detalleFac {
  idPD: number;
  numeroFac: number;
  valorApagar: number;
  saldoFac: number;
  idCabecera: string;
}

export interface clienteP {
  identification: string;
  nombre: string;
  fechaNacimiento: string;
  direccion: string;
  telefono: string;
  correoElectronico: string;
  estado: boolean;
  idTipo: number;
}
export interface cliente {
  Identificacion: string;
  Nombre: string;
  FechaNacimiento: string;
  Direccion: string;
  Telefono: string;
  CorreoElectronico: string;
  Estado: boolean;
}

export interface facturas {
  idFacturaCabecera: number;
  fechaFactura: string;
  subtotal: number;
  iva: number;
  total: number;
  cliente: string;
}

export interface auditoriaCuentaB {
  cuenta: CuentaB;
  fecha: string;
  accion: string;
}
export interface auditoria {
  aud_id: number;
  aud_fecha: string;
  aud_accion: string;
  aud_modulo: string;
  aud_funcionalidad: string;
  aud_observacion: string;
}
