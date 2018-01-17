import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import * as $ from "jquery";
@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.less']
})
export class ViewOrdersComponent implements OnInit {
  ongoingorders: Order[];
  selectedOrder: Order;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('api/order/').subscribe(res => {
      this.ongoingorders = res;
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
    this.apiService.delete('api/Order/' + select.id).subscribe(res => {
      console.log(res);
    });

  }
}

export interface Order {
  id: number,
  origin:string,
  due_time:string,
}


