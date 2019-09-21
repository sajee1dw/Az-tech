import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterInvestorComponent } from './components/register/register-investor/register-investor.component';
import { RegisterProfessionalComponent } from './components/register/register-professional/register-professional.component';
import { LoginInvestorComponent } from './components/login/login-investor/login-investor.component';
import { LoginProfessionalComponent } from './components/login/login-professional/login-professional.component';
import { VerificationComponent } from './components/shared/verification/verification.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGaurd } from './shared/services/authguard.service';
import { InvestorAuthGuardService } from './shared/services/investorAuthGuard.service';
import { ProfessionalAuthGuardService } from './shared/services/professionalAuthGuard.service';



const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
},
{
  path: 'register',
  component: RegisterComponent
},
{
    path: 'loginProfessional',
    component: LoginProfessionalComponent
},
{
    path: 'loginInvestor',
    component: LoginInvestorComponent
},
{
    path: 'verify',
    component: VerificationComponent
},
{
    path: 'registerInvestor',
    component: RegisterInvestorComponent
},
{
    path: 'registerProfessional',
    component: RegisterProfessionalComponent
}
,
    {
        path: 'investor',
        loadChildren: './investor/investor.module#InvestorModule',
        canActivate: [AuthGaurd, InvestorAuthGuardService]
    },
    {
        path: 'professional',
        loadChildren: './professional/professional.module#ProfessionalModule',
        canActivate: [AuthGaurd, ProfessionalAuthGuardService]
    },
{
    path: '**',
    component: PageNotFoundComponent
}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    ],
})
export class AppRoutingModule { }
