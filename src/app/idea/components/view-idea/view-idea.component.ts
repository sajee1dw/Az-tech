import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  AuthIdeaService, ideaPayload, IdeaDetails, ConfirmedPro} from 'src/app/idea/shared/services/auth-idea.service'; // BidPayload, BidDetails
import { AuthenticationService } from 'src/app/professional/shared/services/authentication.service';

@Component({
  selector: 'app-view-idea',
  templateUrl: './view-idea.component.html',
  styleUrls: ['./view-idea.component.css']
})
export class ViewIdeaComponent implements OnInit {

  pro_id: number;
  ideas: IdeaDetails;
 // bids: BidDetails
  marked1 = true
  marked2 =false
  marked3 = false
  marked4 = false

  credentials:ideaPayload={
    id: 0,
    client_ID: 0,
    idea_name:'',
    idea_category: '',
    idea_description:'',
    // payment:''
  }

  // credential:BidPayload={
  //   id: 0,
  //   idea_ID: 0,
  //   maximum_value:'',
  //   start_date:''

  // }

  confirmedPro: ConfirmedPro={
    id: 0,
    developer_ID:0,
    client_ID:0,
    idea_ID:0,
    category: '',
    isCompleted: false
  }

  ideaRequest;
  //bidRequest;
  requestDeveloper;

  constructor(private router: Router, private authpro: AuthIdeaService, private route: ActivatedRoute, private auth: AuthenticationService) { }

  ngOnInit() { 
  //   if(window.localStorage.getItem('token')){

  //   this.route.queryParams.subscribe(params => {
  //     this.pro_id = params['pro_id'];
  //     this.credentials.id = this.pro_id
  //     this.credential.idea_ID = this.pro_id
  //   })

      
  //     this.authpro.viewidea(this.credentials).subscribe(
  //       idea=>{
  //         this.ideas= idea
  //         this.credentials.idea_name = this.ideas.idea_name
  //         this.credentials.idea_category = this.ideas.idea_category
  //         this.credentials.idea_description = this.ideas.idea_description

  //         if(this.ideas.payment==''){
  //           this.marked4 = true
  //           this.marked3 = false
  //           this.authpro.viewBid(this.credential).subscribe(
  //             bid=>{
  //               this.bids = bid
  //               this.credential.maximum_value = this.bids.maximum_value
  //               this.credential.start_date = this.bids.start_date
  //             }
  //           )

  //           this.authpro.viewBidRequest(this.credentials).subscribe(
  //             result=>{
  //               this.bidRequest = result
  //             }
  //           )

  //         }else{
  //           this.marked3 = true
  //           this.marked4 = false
  //           this.credentials.payment = this.ideas.payment

  //           this.authpro.viewideaRequest(this.credentials).subscribe(
  //             result=>{
  //               this.ideaRequest = result
  //           }
  //          )
  //          }

          
  //         this.authpro.viewRequestDeveloper(this.credentials).subscribe(
  //           result=>{
  //             this.requestDeveloper = result
  //           }
  //         )
          

          

  //       },
  //       err => {
  //         console.error(err)
  //       }
  //     )

  // }else{
  //   this.router.navigateByUrl('/');
  // }
  }

  onClick(){
    this.marked1=false
    this.marked2=true
  }


  // Editidea(){

  //   this.authpro.editidea(this.credentials).subscribe(
  //     () => {
                
  //     },
  //     err => {
  //       console.error(err);
  //     }
  //   )

  //   if(this.credentials.payment==''){
  //     this.authpro.editBid(this.credential).subscribe(
  //       () => {
      
  //       },
  //       err => {
  //         console.error(err);
  //       }
  //     )
  //   }

  //   window.location.reload();
  // }

  // CancleEditidea(){
  //   this.marked1=true
  //   this.marked2=false
  // }


  // deleteidea(){

  //     if(window.confirm('Do you want to delete the idea')){
  //       this.authpro.deleteidea(this.credentials).subscribe(
          
  //       )
  //       this.router.navigateByUrl('/idea')
  //     }
  // }


  AcceptProReq(dev_ID:number, category: string){
    this.confirmedPro.developer_ID = dev_ID
    this.confirmedPro.client_ID = this.auth.getUserDetails().id
    this.confirmedPro.idea_ID = this.credentials.id
    this.confirmedPro.category = category

    this.authpro.Confirmedidea(this.confirmedPro).subscribe(
      ()=>{
        window.location.reload()
      }
    )

  }

  // AcceptBidReq(dev_ID:number, category: string){
  //   this.confirmedPro.developer_ID = dev_ID
  //   this.confirmedPro.client_ID = this.auth.getUserDetails().id
  //   this.confirmedPro.idea_ID = this.credentials.id
  //   this.confirmedPro.category = category
    
  //   this.authpro.Confirmedidea(this.confirmedPro).subscribe(
  //     ()=>{
  //       window.location.reload()
  //     }
  //   )

  // }


  logout(){
    this.auth.logout()
    }


}
