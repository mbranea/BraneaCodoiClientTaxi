import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {ApiService} from '../../service/';
  import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  credentials: any = {};
  constructor(private apiService: ApiService, private router: Router) { }
  Users: User[];
  attemptedUser:User;
  checkValue:boolean;
  i:number;
  count : number;
 
  ngOnInit() {
  }
  
  
checkLogin(username:string,password:string)
{
 this.checkValue=false;
 

 
    this.apiService.get('api/client_account/').subscribe(res => {
     
      
      this.Users = res;
      this.count=res.length;
     
    });

 
      
      for(this.i=0;this.i<this.count;this.i++) { 
        console.log(this.i,this.count);
        if (this.Users[this.i].username==username&&this.Users[this.i].password==password) {
          (this.router.navigate(['/', 'main']))
        }else{console.log(this.Users);
              console.log(username,password);
            
        }
      }

  
}



}


class User
{
  username:string;
  password:string;
  constructor(username:string,
    password:string)
  {
this.username=username;
this.password=password;
  }
}
