import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { error } from 'selenium-webdriver';
@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.less']
})
export class ViewOrdersComponent implements OnInit {
  Orders: Order[];
  selectedOrder: Order;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('api/order/').subscribe(res => {
     
      
      this.Orders = res;
      console.log(this.Orders);
    });
    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewOrder(this.selectedOrder) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteOrder(this.selectedOrder) }
    ];
  }
  viewOrder(select: Order) {
    console.log(JSON.stringify(select));

  }
  deleteOrder(select: Order) {
    this.apiService.delete('api/order/' + select.order_id).subscribe(res => {
      console.log(res);
    });

  }
 
}


export interface Order {
  id:number
  order_id: number;
  client_id:number;
  origin:string;
  duetime:string;

  
  }
