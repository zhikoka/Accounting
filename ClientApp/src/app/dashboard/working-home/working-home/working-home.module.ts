import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingHomeRoutingModule } from '../working-home-routing/working-home-routing.module';
import { WorkingHomeComponent } from './working-home.component';
import { WorkingNavComponent } from '../working-nav/working-nav.component';
import { MaterialModule } from '../../../material/material.module';
import { FirmiKorisniciComponent } from '../firmi-korisnici/firmi-korisnici.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompanyComponent } from '../company/company.component';

@NgModule({
  declarations: [
    WorkingHomeComponent,
    WorkingNavComponent,
    FirmiKorisniciComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    WorkingHomeRoutingModule,    
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class WorkingHomeModule { }
