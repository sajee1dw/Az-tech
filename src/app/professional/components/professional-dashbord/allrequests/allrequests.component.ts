import { Component, OnInit } from '@angular/core';
import { professionalService } from 'src/app/professional/shared/services/professional.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allrequests',
  templateUrl: './allrequests.component.html',
  styleUrls: ['./allrequests.component.css']
})
export class AllrequestsComponent implements OnInit {

  reqests = [];
  professional;

  constructor(
    private professionalService: professionalService,
    private auth: AuthService,
    private toastr: ToastrManager,
    private router: Router
  ) {
    this.professional = auth.currentUser.user.email;
  }

  ngOnInit() {
    this.professionalService.getAllrequests(this.professional)
      .subscribe(res => {
        this.reqests = res.json().request;
        console.log(res.json());
      }, err => {
        console.log(err);
      })
  }

  cancelReq(index){
    this.professionalService.cancelReq(index.id)
      .subscribe(response=>{
        if(response.json().success){
          this.toastr.successToastr('Request canceled succesfully');
          this.reqests.splice(index, 1);
        }else{
          this.toastr.errorToastr('Error in deleteing request');
        }
      }, err=>{
        this.toastr.errorToastr('Error in deleting request');
      })
  }

  gotoTutor(email){
    this.router.navigate(['professional/investor/'+email]);
  }



}
