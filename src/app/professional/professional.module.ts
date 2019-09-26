import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { professionalRoutingModule } from './professional-routing.module';
import { ProfessionalDashbordComponent } from 'src/app/professional/components/professional-dashbord/professional-dashbord.component';
//import { SideNavBarComponent } from './components/professional-dashboard/side-nav-bar/side-nav-bar.component';
import { TopNavBarComponent } from 'src/app/professional/components/professional-dashbord/top-nav-bar/top-nav-bar.component';
import { InvestorCardListComponent } from 'src/app/professional/components/professional-dashbord/investor-card-list/investor-card-list.component';
import { InvestorCardComponent } from 'src/app/professional/components/professional-dashbord/investor-card-list/investor-card/investor-card.component';
import { LocationComponent } from 'src/app/professional/components/professional-dashbord/top-nav-bar/location/location.component';
import { SubjectComponent } from 'src/app/professional/components/professional-dashbord/top-nav-bar/subject/subject.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { professionalService } from './shared/services/professional.service';
import { RequestComponent } from 'src/app/professional/components/professional-dashbord/investor-card-list/investor-card/request/request.component';
import { CommonService } from '../shared/services/common.service';
import { professionalInvestorProfileComponent } from './components/investor-profile/investor-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from 'ngx-bar-rating';
import { AchievementComponent } from './components/investor-profile/achievement/achievement.component';
import { AllrequestsComponent } from 'src/app/professional/components/professional-dashbord/allrequests/allrequests.component';
import { RatingComponent } from './components/investor-profile/rating/rating.component';
import { ReviewComponent } from './components/investor-profile/review/review.component';
import { ProfessionalProfileComponent } from './components/professional-profile/professional-profile.component';
import { DetailsComponent } from './components/investor-profile/details/details.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgFloatingActionButtonModule } from '@ng4746/ng-floating-action-button';

@NgModule({
    imports: [
      CommonModule,
      professionalRoutingModule,
      MDBBootstrapModule,
      FormsModule,
      ReactiveFormsModule,
      NgFloatingActionButtonModule,
      NgbModule,
      BarRatingModule,
      ToastrModule
    ],
    declarations: [
        ProfessionalDashbordComponent, 
      //SideNavBarComponent, 
      TopNavBarComponent, 
      InvestorCardListComponent, 
      InvestorCardComponent, 
      LocationComponent, 
      SubjectComponent, 
      RequestComponent,
      professionalInvestorProfileComponent,
      AchievementComponent,
      AllrequestsComponent,
      RatingComponent,
      ReviewComponent,
      ProfessionalProfileComponent,
      DetailsComponent,
    ],
    exports: [
        ProfessionalDashbordComponent, 
      //SideNavBarComponent, 
      TopNavBarComponent, 
      InvestorCardListComponent, 
      InvestorCardComponent, 
      LocationComponent, 
      SubjectComponent,
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    providers: [
      professionalService,
      CommonService,
      AuthService
    ]
  })
  export class professionalModule { }
  