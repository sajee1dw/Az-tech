import { AuthService } from 'src/app/shared/services/auth.service';
import { InvestorProfile } from 'src/app/investor/shared/models/InvestorProfile';
import { InvestorService } from './../../shared/services/investor-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class InvestorProfileComponent implements OnInit {

  investorProfile: InvestorProfile;
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
    description: ""
  }

  reviews = []


  constructor(
    private investorService: InvestorService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    var email = this.authService.currentUser.user.email;
    this.investorService.getInvestorProfile(email)
      .subscribe(res => {
        let user = res.json().profile;
        this.investor.email = user.email;
        this.investor.name = user.firstName + " " + user.lastName;
        this.investor.mobile = user.mobile;
        this.investor.location = user.location;
        this.investor.subject = user.subject;
        this.investor.time = user.available;
        this.investor.price = user.price;
        this.investor.imgUrl = user.imgUrl;
        this.investor.fname = user.firstName;
        this.investor.lname = user.lastName;
        this.investor.description = user.description;

        this.reviews = res.json().reviews;
        // console.log(res.json().reviews);
        console.log(res.json().profile);
      })
  }

  img: File = null;

  updateImage() {
    if (this.img === null) {
      console.log("null image");
      return
    }

    console.log("update image");
    console.log(this.img);

    let img = {'image': this.url, 'email':this.investor.email, 'role':'investor'}

    this.investorService.uploadImage(img)
      .subscribe(res=>{
        console.log(res.json());
      })


  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target['result'];
      }
      this.imageView = true;
      this.img = event.target.files[0];
    }

  }





}
