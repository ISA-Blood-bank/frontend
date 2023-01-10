import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { UserProfileModule } from './pages/user-profile/user-profile.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BloodCenterRegisterModule } from './pages/blood-center-register/blood-center-register.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TokenInterceptor } from './pages/home-page/interceptor/TokenInterceptor';



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
    BloodCenterRegisterModule,
    HttpClientModule,
    MatToolbarModule,
    BloodCenterRegisterModule,
    HttpClientModule,
    MatFormFieldModule,
    UserProfileModule,
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
