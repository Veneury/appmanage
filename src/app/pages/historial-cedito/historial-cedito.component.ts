import { Component, OnInit } from '@angular/core';
import { ManejadorService } from 'src/app/services/manejador.service';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-historial-cedito',
  templateUrl: './historial-cedito.component.html',
  styleUrls: ['./historial-cedito.component.css']
})
export class HistorialCeditoComponent implements OnInit {
  public frmConsulta!:FormGroup;
  public inflaccion:any[] = [];
  constructor(private _manejadorServices:ManejadorService,
              private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.frmConsulta = this.formbuilder.group({
      code:['',Validators.required]
    });
  }

  getCurrencyByCode(cedula:string){
    this._manejadorServices.getHistorialCredito(cedula).subscribe((data:any)=>{
      this.inflaccion.push(data);
      this.inflaccion.map((item:any)=>{
        item.montoTotal = Number(item.montoTotal);
      });
    });
  }

  searchCurrency(){
    this.getCurrencyByCode(this.frmConsulta.value.code);
  }


}
