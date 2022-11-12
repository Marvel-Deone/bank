import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MenuComponent } from './public/menu/menu.component';
import { authGuardServices } from 'auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
// import { FooterComponent } from './public/footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './website/footer/footer.component';
import { MenuComponent } from './website/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [authGuardServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
