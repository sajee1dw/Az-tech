import { Component, OnInit } from '@angular/core';
import { InvestorPrfile } from 'src/app/shared/models/investor-profile.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { InvestorService } from 'src/app/investor/shared/services/investor-service.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-investor-profile',
  templateUrl: './investor-profile.component.html',
  styleUrls: ['./investor-profile.component.css']
})
export class professionalInvestorProfileComponent implements OnInit {

  investorProfile: InvestorPrfile;
  url = ""
  imageView = false;

  investor = {
    email: "",
    name: "",
    mobile: "",
    location: "",
    subject: "",
    time: "",
    price: "",
    imgUrl: "",
    fname: "",
    lname: "",
    rating: null
  }

  reviews = []


  constructor(
    private investorService: InvestorService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let email = this.activatedRoute.snapshot.paramMap.get('id')
    this.investorService.getInvestorProfile(email)
      .subscribe(res => {
        console.log(res.json());
        let user = res.json().profile;
        this.investor.email = user.email;
        this.investor.name = user.firstName + " " + user.lastName;
        this.investor.mobile = user.mobile;
        this.investor.location = user.location;
        this.investor.subject = user.subject;
        this.investor.time = user.time;
        this.investor.time = user.available;
        this.investor.price = user.price;
        this.investor.imgUrl = user.imgUrl;
        this.investor.fname = user.firstName;
        this.investor.lname = user.lastName;
        this.investor.rating = user.rate;

        this.reviews = res.json().reviews;
      })
  }

  img: File;

  updateImage() {

  }

  onSelectFile(event) {
  }








}
