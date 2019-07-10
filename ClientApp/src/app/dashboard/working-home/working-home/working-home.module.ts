import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingHomeRoutingModule } from '../working-home-routing/working-home-routing.module';
import { WorkingHomeComponent } from './working-home.component';
import { WorkingNavComponent } from '../working-nav/working-nav.component';
import { MaterialModule } from '../../../material/material.module';
import { FirmiKorisniciComponent } from '../firmi-korisnici/firmi-korisnici.component';

@NgModule({
  declarations: [
    WorkingHomeComponent,
    WorkingNavComponent,
    FirmiKorisniciComponent
  ],
  imports: [
    CommonModule,
    WorkingHomeRoutingModule,    
    MaterialModule,
  ]
})
export class WorkingHomeModule { }
