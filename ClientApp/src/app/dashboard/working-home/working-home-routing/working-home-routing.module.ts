import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkingHomeComponent } from '../working-home/working-home.component';

import { 
  CanActivate, 
  CanActivateChild,
  Router, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot,
  Route,
  CanLoad
} from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { FirmiKorisniciComponent } from '../firmi-korisnici/firmi-korisnici.component';


const workinghome: Routes = [
  {
    path: '',
  component: WorkingHomeComponent,
 canActivate: [AuthGuard],
  children: [
    {
      path: '',
    canActivateChild: [AuthGuard],
      children: [
      //  { path: '', component: WorkingHomeComponent },
        { path: 'novafirma', component: FirmiKorisniciComponent },
        // { path: 'user', component: UserComponent, data: {title: 'Users'} },
        // { path: 'report', component: ReportComponent, data: {title: 'Report'} },
        // { path: 'reporttable', component: ReportstafftableComponent, data: {title: 'Report'} },
        // { path: 'tablespend', component: TablespendComponent, data: {title: 'PrintReport'} },
        // { path: 'datarange', component: ReportdatarangeComponent, data: {title: 'PrintReport'} },
        // { path: 'frequency', component: ReportmanagerfrequencyComponent, data: {title: 'PrintReport'} }

        
        // { path: 'artikli', component: ArtikliComponent, data: {title: 'Артикли'} },
        // { path: 'firmi', component: FirmiComponent, data: {title: 'Фирми'} },
        // { path: 'komintenti', component: KomintentiComponent, data: {title: 'Коминтенти'} },
        // { path: 'poracki', component: PorackiComponent, data: {title: 'Порачки'} }

      ]
    }
  ]
  }
] ;


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(workinghome)
  ],
  exports: [RouterModule]
})
export class WorkingHomeRoutingModule { }
