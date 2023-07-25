import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class PdfserviceService {
  constructor() {}
  generateAndShowPDF(content: string) {
    const documentDefinition = { content: [content] };
    pdfMake.createPdf(documentDefinition).open();
  }
}
