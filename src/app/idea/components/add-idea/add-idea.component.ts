import { Component, OnInit } from '@angular/core';
import {  AuthIdeaService, ideaPayload, } from 'src/app/idea/shared/services/auth-idea.service'; //BidPayload
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from 'src/app/professional/shared/services/authentication.service';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {


  // marked1 = false
  // marked2 = false

  constructor(private authPro: AuthIdeaService, private router: Router, private auth: AuthenticationService) { }

  details: UserDetails
  idea_details: ideaPayload
  // bid_details: BidPayload

  ngOnInit() {
  }

  credentials:ideaPayload={
    id: 0,
    client_ID: 0,
    idea_name:'',
    idea_category:'',
    idea_description:'',
   // payment:''

  }

  // credential:BidPayload={
  //   id: 0,
  //   idea_ID: 0,
  //   maximum_value:'',
  //   start_date:''

  // }

  // Addidea(){

  //   this.credentials.client_ID = this.auth.getUserDetails().id

  //   this.authPro.addidea(this.credentials).subscribe(
  //     idea=>{
  //       this.idea_details = idea

  //      if(this.credential.maximum_value!=''){

  //        this.credential.idea_ID= this.idea_details.id
  //        this.authPro.addBid(this.credential).subscribe(
  //           bid =>{
  //             this.bid_details = bid
  //           }
  //         )
  //       }
        
  //     },
  //     err => {
  //       console.error(err)
  //     }
  //   )

  //    this.router.navigateByUrl('/idea')

  //  }


  // fixedPrice(){
  //   this.marked1 = true
  //   this.marked2 = false
  // }

  // startBid(){
  //   this.marked1 = false
  //   this.marked2 = true
  // }

  logout(){
    this.auth.logout()
    }

}
