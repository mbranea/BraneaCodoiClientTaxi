
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientInfo2Component } from './components/client-info2/client-info2.component';



import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { MainWindowComponent } from './main-window/main-window.component';

import { AddAdrCrdComponent } from './add-adr-crd/add-adr-crd.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ApiService } from './service/index';


const routes: Routes = [
  { 
    path: '', redirectTo: 'login', pathMatch: 'full' },
    
  {
    path: 'client_info', component: ClientInfo2Component
  },


  {path: 'login', component: LoginComponent
  },
  {path:'register', component: RegisterComponent},
  {path:'main', component: MainWindowComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'view', component: ViewOrdersComponent},
  {path:'api', component: ApiService},
  

  {
    path: 'add-adr-crd', component: AddAdrCrdComponent 
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
