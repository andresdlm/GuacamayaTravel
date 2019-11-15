import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { OrderInterface } from 'src/app/models/order';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveOrder(orderForm: NgForm): void {
    if (orderForm.value.id == null){
      //Nuevo
      this.dataApi.createOrder(orderForm.value);
    } else {
      //Modificar
      this.dataApi.updateOrder(orderForm.value);
    }
    this.clearForm(orderForm)
    this.btnClose.nativeElement.click();
  }

  clearForm(hotelForm: NgForm): void {
    hotelForm.resetForm();
  }

}
