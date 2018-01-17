import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/';
@Component({
  selector: 'app-add-adr-crd',
  templateUrl: './add-adr-crd.component.html',
  styleUrls: ['./add-adr-crd.component.less']
})
export class AddAdrCrdComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  registerAdress(adress_name:string,
    oras:string,
    cartier:string,
    street_name:string)
  {
    const adress = new Adress (adress_name,oras,cartier,street_name);
    console.log(adress);
    this.apiService.post('api/registered_adresses/',adress).subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    });
  }

}

class Adress
{
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


