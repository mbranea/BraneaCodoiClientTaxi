import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/primeng';
import {ListboxModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import { ApiService } from '../service/index';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.less']
})



export class PlaceOrderComponent implements OnInit{
  selectedAdress: Adress;
Adresses : Adress[];
    

    constructor(private apiService :ApiService) {
       
    }

    ngOnInit() {

        this.apiService.get('api/registered_adresses/').subscribe(res => {
     
      
            this.Adresses = res;
            console.log(this.Adresses);
          });
    }
registerOrder(due_time:string)
{
const origin = this.selectedAdress.oras+' '+this.selectedAdress.cartier
const order =new Order(origin,due_time);
this.apiService.post('api/order/',order).subscribe(res =>{
  console.log(res);
}, error =>{
  console.log(error);
});
}




}

class Adress
{
  id:number;
  adress_name:string;
  oras:string;
  cartier:string;
  street_name:string;


  constructor(adress_name:string,
    oras:string,
    cartier:string,
    street_name:string)
  {
this.adress_name=adress_name;
this.oras=oras;
this.cartier=cartier;
this.street_name=street_name;
  }
}

 class Order {
  id:number
  
  origin:string;
  due_time:string;

  constructor(
    origin:string,
    due_time:string,)
    {
     
      this.origin=origin;
      this.due_time=due_time;

    }
  }

  