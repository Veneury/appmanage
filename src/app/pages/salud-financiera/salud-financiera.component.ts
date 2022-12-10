import { Component, OnInit } from '@angular/core';
import { ManejadorService } from 'src/app/services/manejador.service';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-salud-financiera',
  templateUrl: './salud-financiera.component.html',
  styleUrls: ['./salud-financiera.component.css']
})
export class SaludFinancieraComponent implements OnInit {

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
    this._manejadorServices.getSaludFinancieraByCedula(cedula).subscribe((data:any)=>{
      this.inflaccion.push(data);
    });
  }

  searchCurrency(){
    this.getCurrencyByCode(this.frmConsulta.value.code);
  }

}
