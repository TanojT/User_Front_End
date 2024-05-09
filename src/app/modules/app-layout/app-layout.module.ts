import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';
import { TransporterOwnerComponent } from '../dashboard/transporter-owner/transporter-owner.component';
import { DriverComponent } from '../dashboard/driver/driver.component';
import { CleanerComponent } from '../dashboard/cleaner/cleaner.component';
import { NavComponent } from '../../shared/nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppLayoutComponent,
    TransporterOwnerComponent,
    DriverComponent,
    CleanerComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    MatIconModule,
    MatMenuModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppLayoutModule { }
