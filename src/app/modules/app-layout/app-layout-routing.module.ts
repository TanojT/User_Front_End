import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransporterOwnerComponent } from '../dashboard/transporter-owner/transporter-owner.component';
import { DriverComponent } from '../dashboard/driver/driver.component';
import { CleanerComponent } from '../dashboard/cleaner/cleaner.component';
import { AppLayoutComponent } from './app-layout.component';
import { MyAccountComponent } from '../../shared/my-account/my-account.component';

const routes: Routes = [{
  path: '',
  component: AppLayoutComponent,
  children: [{
    path: 'transporter-owner',
    component: TransporterOwnerComponent
  }, {
    path: 'driver',
    component: DriverComponent
  }, {
    path: 'cleaner',
    component: CleanerComponent
  }, {
    path: 'my-account',
    component: MyAccountComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
