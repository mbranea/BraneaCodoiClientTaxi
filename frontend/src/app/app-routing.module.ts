
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components';
import { ClientInfo2Component } from './components/client-info2/client-info2.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
    },
    {path: 'client_info', component: ClientInfo2Component
  },
  {path: 'login', component: LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
