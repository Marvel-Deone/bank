import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardServices } from 'auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo:'landing-page', pathMatch: 'full'},
  { path: 'landing-page', component: HomeComponent, canActivate: [authGuardServices]},
  { path: 'sign-in', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
