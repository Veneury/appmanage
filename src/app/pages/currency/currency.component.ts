import { Component, OnInit } from '@angular/core';
import { ManejadorService } from 'src/app/services/manejador.service';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Currency } from 'src/app/shared/interfaces/Currency.intefaces';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  public frmConsulta!:FormGroup;
  public currency:Currency[] = [];
  constructor(private _manejadorServices:ManejadorService,
              private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.frmConsulta = this.formbuilder.group({
      code:['',Validators.required]
    });
  }

  getCurrencyByCode(code:string){
    this._manejadorServices.getCurrencyByCode(code.toUpperCase()).subscribe((data:any)=>{
      this.currency.push(data);
    });
  }

  searchCurrency(){
    this.getCurrencyByCode(this.frmConsulta.value.code);
  }
}
