import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { professionalService } from 'src/app/professional/shared/services/professional.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating;
  @Input() investor;
  currentRate;
  review = null;
  

  constructor(
    private professionalService: professionalService,
    private auth: AuthService,
    private toastr: ToastrManager
  ) {

  }

  ngOnInit() {
    this.currentRate = this.rating;
  }

  reviewInvestor() {
    if (this.review === null) {
      alert("Please write a review");
      return;
    }




    let rate = {
      'rate': this.currentRate/2,
      'investor': this.investor,
      'professional': this.auth.currentUser.user.email,
      'priority': this.currentRate
    };

    let review = {
      'content': this.review,
      'investor': this.investor,
      'professional': this.auth.currentUser.user.email,
      'priority': 2
    };

    this.professionalService.rateInvestor(rate)
      .subscribe(res => {
        console.log(res.json());
        if (!res.json().allowed) {
          this.toastr.warningToastr('Investor must accept your request before rate him..!');
          return;
        }
        this.currentRate = res.json().newRate;
      });

    this.professionalService.reviewInvestor(review)
      .subscribe(res => {
        console.log(res.json());
        if (!res.json().allowed) {
          this.toastr.warningToastr('investor must accept your request before review him..!');
          return;
        }
        this.toastr.successToastr('Thank you for your review...!');
      });


  }


}