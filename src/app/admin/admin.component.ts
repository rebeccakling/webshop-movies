import { Component, OnInit } from '@angular/core';
import { IExtendedOrder } from '../interfaces/IOrder';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  extendedOrders: IExtendedOrder[] = [];

  constructor(private service: DataServiceService) {
  }


ngOnInit() {
  //Subscriba på ordern och filmnamnet som ligger i databasen, och puschar in i egenskapen extendedOrders
  this.service.fetchOrderData().subscribe((orderData) => {

    for (let i = 0; i < orderData.length; i++) {
      this.extendedOrders.push({ order: orderData[i], movieNames: [] });

      let orderRows = orderData[i].orderRows;

      for (let j = 0; j < orderRows.length; j++) {
        let productId = orderRows[j].productId;

        this.service.fetchSingleMovie(productId).subscribe((data) => {
        
          this.extendedOrders[i].movieNames.push(data.name);
        });
      }
    }
  });
}
}