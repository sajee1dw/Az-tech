import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { InvestorRoutingModule } from './investor-routing.module';
import { InvestorDashboardComponent } from './components/investor-dashboard/investor-dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InvestorService } from './shared/services/investor-service.service';
import { CommonService } from '../shared/services/common.service';
import { RequestsComponent } from './components/investor-dashboard/requests/requests.component';
import { InvestorProfileComponent } from './components/profile/profile.component';
import { ReviewComponent } from './components/profile/review/review.component';
import { AchievementsComponent } from './components/investor-dashboard/achievements/achievements.component';
import { AchieveComponent } from './components/investor-dashboard/achievements/achieve/achieve.component';
import { RequestComponent } from './components/investor-dashboard/requests/request/request.component';
import { NgChatModule } from 'ng-chat';
//import { FloatingActionMenuModule } from 'ng2-floating-action-menu';
import { BoostComponent } from './components/investor-dashboard/boost/boost.component';
import { NgFloatingActionButtonModule } from '@ng4746/ng-floating-action-button';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';



@NgModule({
  imports: [
    CommonModule,
    InvestorRoutingModule,
    MDBBootstrapModule,
    NgFloatingActionButtonModule,
    NgChatModule,
    FormsModule,
    ReactiveFormsModule,
    JwSocialButtonsModule,

  ],
  declarations: [
    InvestorDashboardComponent,
    RequestsComponent,
    InvestorProfileComponent,
    ReviewComponent,
    AchievementsComponent,
    AchieveComponent,
    RequestComponent,
    BoostComponent,
  ],
  exports: [
    InvestorDashboardComponent,
    InvestorProfileComponent,
    ReviewComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    InvestorService,
    CommonService,
  ]
})
export class InvestorModule { }
