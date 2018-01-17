import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/';
import { LoginFormComponent } from '../login/login-form/login-form.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  applyChanges(lastName:string,firstName:string,phoneNumber:string,eMail:string)
  {
 
 
    
     this.changeInfo(lastName,firstName,phoneNumber,eMail);
 
 
 
 
   }
 
   
  changeInfo(lastName:string,firstName:string,phoneNumber:string,eMail:string)
   {
    let info : ClientInfo;
    let infoArray :ClientInfo[];

      this.apiService.get('api/client_info/').subscribe(res => {
     
      console.log(infoArray);
     infoArray = res;
     console.log(infoArray);
     info=infoArray[0];
     info.Name=lastName;
     info.EMail=eMail;
     info.PhoneNumber=phoneNumber;
     info.FirstName=firstName;
    
     
    });

     this.apiService.put('api/client_info/',info);
  
 }
}
 
 class ClientAccount{
id:number;
 username:string;
 password:string;
 client_id:number;
 
 constructor (username:string,password:string)
 {
   this.username=username;
   this.password=password;
  this.client_id=1;
 }
 
 }
 
 class ClientInfo{
  id:number; 
  Name:string;
   FirstName:string;
   PhoneNumber:string;
   EMail:string;
   constructor (lastName:string, firstName:string, phoneNumber:string, eMail:string,)
   {
     this.Name=lastName;
     this.FirstName=firstName;
     this.PhoneNumber=phoneNumber;
     this.EMail=eMail;
   }
 }
