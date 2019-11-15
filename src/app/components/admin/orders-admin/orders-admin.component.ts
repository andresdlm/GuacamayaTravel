import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { OrderInterface } from 'src/app/models/order';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.scss']
})
export class OrdersAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private orders: OrderInterface[];

  ngOnInit() {
    this.getListOrders();
  }

  getListOrders() {
    this.dataApi.readAllOrder().subscribe(orders => {
      this.orders = orders;
    });
  }

  onDeleteOrders(idOrder: string): void {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.deleteOrder(idOrder);
    }
  }
  
  onPreUpdateOrder(order: OrderInterface) {
    this.dataApi.selectedOrder = Object.assign({}, order);
  }

}
