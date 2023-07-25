import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

// Cargar las fuentes
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

export class PdfTemplate {
  static generatePDF(data: any[]): void {
    const content = this.createPdfContent(data);
    const styles = this.createPdfStyles();

    const documentDefinition: TDocumentDefinitions = {
      content,
      styles,
    };

    pdfMake.createPdf(documentDefinition).open();
  }

  private static createPdfContent(data: any[]): any[] {
    const headerText = 'ESTADO DE CUENTA DE CLIENTES';

    const table = {
      headerRows: 1,
      body: this.getTableBody(data),
    };

    return [
      { text: headerText, style: 'header' },
      { table, style: 'table' },
    ];
  }

  private static createPdfStyles(): any {
    return {
      header: {
        fontSize: 20,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 20],
      },
      table: {
        margin: [0, 5, 0, 15],
      },
    };
  }
  private static getTableBody(data: any[]): any[] {
    const body: any[] = [
      ['Código', 'Descripción', 'Fecha', 'Banco', 'Cliente','Total a pagar'],
    ];

    data.forEach((item) => {
      body.push([
        item.idPC,
        item.descripcionPC,
        item.fechaPC,
        item.idCB,
        item.cedulaCli,
        item.totalPD,

      ]);
    });

    return body;
  }
}
