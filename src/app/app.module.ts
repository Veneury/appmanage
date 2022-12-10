import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyComponent } from './pages/currency/currency.component';
import { InflaccionComponent } from './pages/inflaccion/inflaccion.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SaludFinancieraComponent } from './pages/salud-financiera/salud-financiera.component';
import { HistorialCeditoComponent } from './pages/historial-cedito/historial-cedito.component';
import { LogsComponent } from './pages/logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    InflaccionComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SaludFinancieraComponent,
    HistorialCeditoComponent,
    LogsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
