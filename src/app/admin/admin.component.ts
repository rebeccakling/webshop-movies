import { Component, OnInit } from '@angular/core';
import { IOrder } from '../interfaces/IOrder';
import { DataServiceService } from '../services/data-service.service';

@Component({
 selector: 'app-admin',
 templateUrl: './admin.component.html',
 styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 orders: IOrder[];

 constructor(service: DataServiceService) {
   service.fetchOrderData().subscribe((orderData) => {this.orders = orderData; });
 }

 ngOnInit() {
   
 }

}