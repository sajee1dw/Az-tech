import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalDashbordComponent } from 'src/app/professional/components/professional-dashbord/professional-dashbord.component';
import { professionalInvestorProfileComponent } from './components/investor-profile/investor-profile.component';
import { InvestorCardListComponent } from 'src/app/professional/components/professional-dashbord/investor-card-list/investor-card-list.component';
import { AllrequestsComponent } from 'src/app/professional/components/professional-dashbord/allrequests/allrequests.component';
import { ProfessionalProfileComponent } from './components/professional-profile/professional-profile.component';

const routes: Routes = [
    {
      path: '',
      component: ProfessionalDashbordComponent,
      children: [
        {path: '', redirectTo: "investor"},
        {path: "investor", component: InvestorCardListComponent},
        {path: "allrequests", component: AllrequestsComponent},
      ]
    },
    {
      path: 'investor/:id',
      component: professionalInvestorProfileComponent
    },
    {
      path: 'profile',
      component: ProfessionalProfileComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class professionalRoutingModule { }
  