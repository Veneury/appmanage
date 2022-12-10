import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ManejadorService {

  constructor(private _httpClient:HttpClient) { }

  getCurrencyByCode(code:string){
    return this._httpClient.get( `${environment.url}/Currencies/GetCurrencyByCode/${code}`);
  }
  getInflaccionByDate(date:string){
    return this._httpClient.get( `${environment.url}Inflaccions/GetInflaccionByDate/${date}`);
  }
  getSaludFinancieraByCedula(cedula:string){
    return this._httpClient.get( `${environment.url}SaludFinancieras/GetSaludFinancieraByCedula/${cedula}`);
  }
  getHistorialCredito(cedula:string){
    return this._httpClient.get( `${environment.url}Historialcrediticios/GetHistorialcrediticioByCedula/${cedula}`);
  }
  getLogs(){
    return this._httpClient.get( `${environment.url}LogInfoes`);
  }
}
