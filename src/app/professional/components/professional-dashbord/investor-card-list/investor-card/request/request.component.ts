import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { FormBuilder } from '@angular/forms';
import { InvestorRequest } from 'src/app/shared/models/request.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { professionalService } from 'src/app/professional/shared/services/professional.service';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @Input() investorId;
  subjects: string[];
  form;
  professional;

  districts: string[] = [
    "Ampara", "Anuradhapura", "Badulla", "Batticola", "Colombo", "Galle", "Gampaha", "Hambanthota", "Jaffna", "Kaluthara",
    "Kandy", "Kegalle", "Kilinochchi", "Kurunagala", "Mannar","Mathale", "Mathara", "Monaragala", "Mulativu", "Nuwara Eliya",
    "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya", "all"
  ]

  days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  constructor(
    private commonservice: CommonService,
    private fb: FormBuilder,
    private auth: AuthService,
    private professionalService: professionalService,
    private toastr: ToastrManager
  ) {
    this.form = this.fb.group({
      location: [''],
      subject: [''],
      day: [''],
    });
    this.professional = this.auth.currentUser.user.email;
  }

  get location() { return this.form.get('location') }
  get subject() { return this.form.get('subject') }
  get day() { return this.form.get('day') }

  ngOnInit() {
    this.commonservice.getAllSubjects()
      .subscribe(res => {
        this.subjects = res.json().subject;
      })
  }

  onSend(form) {
    let fd = form.value;
    console.log(fd);
    let request = new InvestorRequest(fd.location, fd.subject, fd.day, this.investorId, this.professional);
    console.log(request);
    this.professionalService.sendRequest(request)
      .subscribe(response=>{
        console.log(response);
        this.toastr.successToastr('Request Sent');
      }, err=>{
        this.toastr.errorToastr('Request send error... please try again...!');
        console.log(err);
      })
  }

}
