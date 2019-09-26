import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChatModule } from 'ng-chat';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { HttpModule } from '@angular/http';
import { RegisterService } from './shared/services/register.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/shared/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterInvestorComponent } from './components/register/register-investor/register-investor.component';
import { RegisterProfessionalComponent } from './components/register/register-professional/register-professional.component';
import { LoginInvestorComponent } from './components/login/login-investor/login-investor.component';
import { LoginProfessionalComponent } from './components/login/login-professional/login-professional.component';
import { VerificationComponent } from './components/shared/verification/verification.component';
import { AuthService } from './shared/services/auth.service';
import { AuthGaurd } from './shared/services/authguard.service';
import { CommonService } from './shared/services/common.service';
import { PusherService } from './shared/services/pusher.service';
import { InvestorProfileComponent } from './investor/components/profile/profile.component';
import { InvestorDashboardComponent } from './investor/components/investor-dashboard/investor-dashboard.component';
import { ReviewComponent } from './investor/components/profile/review/review.component';
import { RequestsComponent } from './investor/components/investor-dashboard/requests/requests.component';
import { RequestComponent } from './investor/components/investor-dashboard/requests/request/request.component';
import { BoostComponent } from './investor/components/investor-dashboard/boost/boost.component';
import { AchievementsComponent } from './investor/components/investor-dashboard/achievements/achievements.component';
import { AchieveComponent } from './investor/components/investor-dashboard/achievements/achieve/achieve.component';
import { InvestorService } from './investor/shared/services/investor-service.service';
import { ProfessionalProfileComponent } from './professional/components/professional-profile/professional-profile.component';
import { ProfessionalDashbordComponent } from './professional/components/professional-dashbord/professional-dashbord.component';
import { AllrequestsComponent } from './professional/components/professional-dashbord/allrequests/allrequests.component';
import { RouterModule } from '@angular/router';
import { professionalService } from './professional/shared/services/professional.service';
import { BarRatingModule } from "ngx-bar-rating";
import { InvestorCardListComponent } from './professional/components/professional-dashbord/investor-card-list/investor-card-list.component';
import { InvestorCardComponent } from './professional/components/professional-dashbord/investor-card-list/investor-card/investor-card.component';
import { AchievementComponent } from './professional/components/investor-profile/achievement/achievement.component';
import { DetailsComponent } from './professional/components/investor-profile/details/details.component';
import { RatingComponent } from './professional/components/investor-profile/rating/rating.component';
import { TopNavBarComponent } from './professional/components/professional-dashbord/top-nav-bar/top-nav-bar.component';
import { LocationComponent } from './professional/components/professional-dashbord/top-nav-bar/location/location.component';
import { SubjectComponent } from './professional/components/professional-dashbord/top-nav-bar/subject/subject.component';
import { AddIdeaComponent } from './idea/components/add-idea/add-idea.component';
import { EditIdeaComponent } from './idea/components/add-idea/edit-idea/edit-idea.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RegisterInvestorComponent,
    RegisterProfessionalComponent,
    LoginInvestorComponent,
    LoginProfessionalComponent,
    VerificationComponent,
    InvestorProfileComponent, 
    InvestorDashboardComponent,
    ReviewComponent,
    RequestsComponent,
    RequestComponent,
    BoostComponent,
    AchievementsComponent,
    AchieveComponent,
    ProfessionalProfileComponent,
    ProfessionalDashbordComponent,
    AllrequestsComponent,
    InvestorCardListComponent,
    InvestorCardComponent,
    AchievementComponent,
    DetailsComponent,
    RatingComponent,
    TopNavBarComponent,
    LocationComponent,
    SubjectComponent,
    AddIdeaComponent,
    EditIdeaComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    BarRatingModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    NgChatModule,
    BlockUIModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    RegisterService,
    AuthService,
    AuthGaurd,
    InvestorService,
    professionalService,
    PusherService,
    CommonService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
