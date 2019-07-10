import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrisiComponent } from './brisi/brisi.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
// import { AuthService } from './services/auth.service';
// import { AuthGuard } from './services/auth-guard.service';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'brisi', component: BrisiComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  //{ path: 'elektronskiizvod', component: ElektronskiIzvodComponent, pathMatch: 'full'},
  {
    path: 'working-home',
    loadChildren : () => import('./dashboard/working-home/working-home/working-home.module').then(m => m.WorkingHomeModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthService, AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
