import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './public/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { authGuardServices } from 'auth/auth-guard.service';
import { FooterComponent } from './public/footer/footer.component';
import { SigninComponent } from './signin/signin.component';

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
