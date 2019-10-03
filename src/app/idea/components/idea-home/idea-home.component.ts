import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from 'src/app/professional/shared/services/authentication.service';
import { Router } from '@angular/router';
import {  AuthIdeaService, ideaPayload, IdeaDetails} from 'src/app/idea/shared/services/auth-idea.service';

@Component({
  selector: 'app-idea-home',
  templateUrl: './idea-home.component.html',
  styleUrls: ['./idea-home.component.css']
})
export class IdeaHomeComponent implements OnInit {

  

  constructor(private authPro: AuthIdeaService, private router: Router, private auth: AuthenticationService) { }

  ideas: IdeaDetails
 
   ngOnInit() {
   //   if(window.localStorage.getItem('token')){
   //   this.authPro.idea().subscribe(
   //     idea => {
   //       this.ideas = idea
   //     },
   //     err => {
   //       console.error(err)
   //     }
   //   )
   //   }else{
   //     this.router.navigateByUrl("/")
   //   }
    }
 
   onClick(ideaID:number){
     this.router.navigate(['/idea/viewIdea'], { queryParams: { pro_id: ideaID } })
   }
 
 }
 