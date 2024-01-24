import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/core/services/models/order.service';
import { Order } from 'src/app/core/interfaces/order.interface';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-report-by-month',
  templateUrl: './report-by-month.component.html',
  styleUrls: ['./report-by-month.component.css']
})
export class ReportByMonthComponent implements OnInit{
  orders: Order [] = [];
  setSpinner: string = 'visually-hidden';
  @ViewChild('htmlData') htmlData!: ElementRef;
  @ViewChild('btnPreview') btnPreview!: ElementRef;

  constructor(private orderService: OrderService){}

  ngOnInit(){
    this.getOrders(1);
  }

  getOrders(page: number){
    page = Number(page);
    this.orderService.getAll()
    .subscribe({
      next: (response) => {
        console.log('orders: ', response);
        this.orders = response;
      },
      error: error=>{
        console.log('error: ', error);
      }
    });
  }

  downloadPDF() {
    this.setSpinner = 'visually';
    // Extraemos el

    const DATA: any = this.htmlData.nativeElement;
    // const DATA: any = document.querySelector('#htmlData');
    const doc = new jsPDF('p', 'pt', 'letter');
    const options = {
      background: 'red',
      scale: 3
    };
    const btn = this.btnPreview.nativeElement;
      btn!.classList.add('visually-hidden');
      html2canvas(DATA).then((canvas:any) => {
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = ((canvas.height * imgWidth) / canvas.width);
        let heightLeft = imgHeight;
        let position = 10;
        heightLeft -= pageHeight;

        const doc = new jsPDF('p', 'mm');
        doc.setProperties({
          title: "Reporte de Ventas Mensual",
          });
        doc.addImage(canvas, 'PNG', 10, position + 5, imgWidth-20, imgHeight, '', 'FAST');
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(canvas, 'PNG', 10, position + 5, imgWidth-20, imgHeight, '', 'FAST');
          heightLeft -= pageHeight;
        }
      this.setSpinner = 'visually-hidden';




      window.open(URL.createObjectURL(doc.output("blob")))
      // doc.save('ReporteMensual.pdf');
    });
    btn!.classList.remove('visually-hidden');

  }

}
