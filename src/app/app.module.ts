import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BloodCenterRegisterModule } from './pages/blood-center-register/blood-center-register.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomePageModule,
    MatToolbarModule,
    BloodCenterRegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
