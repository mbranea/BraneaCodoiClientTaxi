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

import { EditComponent } from './edit/edit.component';
import { DataTableModule } from 'primeng/primeng';






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

    EditComponent,




  ],
  imports: [
    DataTableModule,
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
