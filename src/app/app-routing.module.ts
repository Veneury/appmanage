import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './pages/currency/currency.component';
import { HistorialCeditoComponent } from './pages/historial-cedito/historial-cedito.component';
import { HomeComponent } from './pages/home/home.component';
import { InflaccionComponent } from './pages/inflaccion/inflaccion.component';
import { LogsComponent } from './pages/logs/logs.component';
import { SaludFinancieraComponent } from './pages/salud-financiera/salud-financiera.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'currency', component: CurrencyComponent},
  {path:'inflaccion', component: InflaccionComponent},
  {path:'salud-financiera', component: SaludFinancieraComponent},
  {path:'historial-credito', component: HistorialCeditoComponent},
  {path:'logs', component: LogsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
