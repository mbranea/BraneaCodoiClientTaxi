import {RouterModule,Routes} from '@angular/router';

// CORE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// UI
import { SuiModule } from 'ng2-semantic-ui';

// Services
import { ApiService } from './service';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';


// used to create fake backend
import { fakeBackendProvider } from './service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { ClientInfo2Component } from './components/client-info2/client-info2.component';

import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

import { MainWindowComponent } from './main-window/main-window.component';

import { AddAdrCrdComponent } from './add-adr-crd/add-adr-crd.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { DataTableModule, SharedModule, CalendarModule,
  ButtonModule,
  InputTextModule,
  ContextMenuModule } from 'primeng/primeng';


import { EditComponent } from './edit/edit.component';






@NgModule({
  declarations: [
    AppComponent,
   
    ClientInfo2Component,

    RegisterComponent,

    LoginComponent,
    LoginFormComponent,

    MainWindowComponent,

    AddAdrCrdComponent,

    AboutComponent,

    ContactComponent,

<<<<<<< HEAD
    ViewOrdersComponent,
=======
    EditComponent,

>>>>>>> d01fd6c675eca64ea4c91a6ec44204f440ab584f



  ],
  imports: [
AppRoutingModule,
    
    // Prime
    DataTableModule,
    SharedModule,
    FormsModule,
    DataTableModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    ContextMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SuiModule,
  ],
  providers: [
    AppRoutingModule,
    ApiService,
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
