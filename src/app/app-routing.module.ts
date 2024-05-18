import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AuthGuardNOChild, AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateOrEditUserDetailsComponent, UserDetailsComponent} from './components/user-details/user-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
  canActivate:[AuthGuardNOChild],
  canActivateChild:[AuthGuard],
    children: [
      {path: 'users', component: UserDetailsComponent},
      {path: 'dashboard', component: UserDashboardComponent}
    ]
  },
  {path: '**', redirectTo: '' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
