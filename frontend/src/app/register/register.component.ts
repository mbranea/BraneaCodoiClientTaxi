
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, Params } from '@angular/router';
  import { ApiService } from '../service/';
   @Component({
     selector: 'app-register',
     templateUrl: './register.component.html',
     styleUrls: ['./register.component.less']
   })
   export class RegisterComponent implements OnInit {
   
    
    constructor(private apiService: ApiService,private router:Router) { }
   
     ngOnInit() {
     }
   
  
  
  
   registerAccount(username:string,password:string,lastName:string,firstName:string,phoneNumber:string,eMail:string)
   {
  
  
      this.registerData(username,password);
      this.registerInfo(lastName,firstName,phoneNumber,eMail);
      (this.router.navigate(['/', 'login']))
  
  
  
  
    }
  
    registerData(username:string,password:string)
    {
     const account = new ClientAccount(username,password);
      this.apiService.post('api/client_account/',account).subscribe(res =>{
        console.log(res);
      }, error =>{
        console.log(error);
      });
    }
    registerInfo(lastName:string,firstName:string,phoneNumber:string,eMail:string)
    {
      const information = new ClientInfo(lastName,firstName,phoneNumber,eMail);
      console.log(information);
      this.apiService.post('api/client_info/',information).subscribe(res =>{
        console.log(res);
      }, error =>{
        console.log(error);
     });
    }
   
  }
  
  
  class ClientAccount{

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
    
  
  
  

