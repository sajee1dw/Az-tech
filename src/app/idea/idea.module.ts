import { Injectable } from '@angular/core';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import {IdeaRoutingModule} from './idea-routing.module'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgFloatingActionButtonModule } from '@ng4746/ng-floating-action-button';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { NgChatModule } from 'ng-chat';
import { AuthenticationService } from 'src/app/professional/shared/services/authentication.service';
import { AuthIdeaService} from 'src/app/idea/shared/services/auth-idea.service';

import{AddIdeaComponent } from 'src/app/idea/components/add-idea/add-idea.component' 
import{IdeaHomeComponent} from 'src/app/idea/components/idea-home/idea-home.component'
import{ViewIdeaComponent } from 'src/app/idea/components/view-idea/view-idea.component'


@NgModule({
  imports: [
    CommonModule,
    IdeaRoutingModule,
    MDBBootstrapModule,
    NgFloatingActionButtonModule,
    NgChatModule,
    FormsModule,
    ReactiveFormsModule,
    JwSocialButtonsModule,

  ],
  declarations: [
    AddIdeaComponent,
    IdeaHomeComponent,
    ViewIdeaComponent
  ],
  exports: [
    AddIdeaComponent,
    IdeaHomeComponent,
    ViewIdeaComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AuthenticationService,
    AuthIdeaService
  ]
})



export class Ideamodule { }


