import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatCommonModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransporterOwnerComponent } from './modules/dashboard/transporter-owner/transporter-owner.component';
import { DriverComponent } from './modules/dashboard/driver/driver.component';
import { CleanerComponent } from './modules/dashboard/cleaner/cleaner.component';
import { NavComponent } from './shared/nav/nav.component';
import { AppLayoutComponent } from './modules/app-layout/app-layout.component';
import { AppLayoutModule } from './modules/app-layout/app-layout.module';
import { MyAccountComponent } from './shared/my-account/my-account.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyAccountComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCommonModule,
    AppLayoutModule,
    FormsModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
