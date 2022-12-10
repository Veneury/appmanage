import { Component, OnInit } from '@angular/core';
import { ManejadorService } from 'src/app/services/manejador.service';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  p: number = 1;
  public frmConsulta!:FormGroup;
  public inflaccion:any[] = [];
  constructor(private _manejadorServices:ManejadorService,
              private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.frmConsulta = this.formbuilder.group({
      code:['',Validators.required]
    });
    this.getLogs();
  }

  getLogs(){
    this._manejadorServices.getLogs().subscribe((data:any)=>{
      this.inflaccion = data;
    });
  }

  searchCurrency(){
    this.getLogs();
  }
}
