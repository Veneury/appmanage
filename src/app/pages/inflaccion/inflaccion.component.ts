import { Component, OnInit } from '@angular/core';
import { ManejadorService } from 'src/app/services/manejador.service';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inflaccion',
  templateUrl: './inflaccion.component.html',
  styleUrls: ['./inflaccion.component.css']
})
export class InflaccionComponent implements OnInit {

  public frmConsulta!:FormGroup;
  public inflaccion:any[] = [];
  constructor(private _manejadorServices:ManejadorService,
              private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.frmConsulta = this.formbuilder.group({
      code:['',Validators.required]
    });
  }

  getCurrencyByCode(date:string){
    this._manejadorServices.getInflaccionByDate(date).subscribe((data:any)=>{
      this.inflaccion.push(data);
    });
  }

  searchCurrency(){
    this.getCurrencyByCode(this.frmConsulta.value.code);
  }

}
