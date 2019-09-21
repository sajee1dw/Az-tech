import { Component, OnInit, Input } from '@angular/core';
import { InvestorCard } from 'src/app/professional/shared/models/investor-card.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-investor-card',
  templateUrl: './investor-card.component.html',
  styleUrls: ['./investor-card.component.css']
})
export class InvestorCardComponent implements OnInit {

  @Input() investor: InvestorCard;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  isLogged: boolean = this.auth.isLogged();

  ngOnInit() {
    if(this.investor.package == null){
      this.packageCss = "white-black";
    }else if(this.investor.package === "gold"){
      this.packageCss = "rgba-orange-light";
    }else if(this.investor.package === "silver"){
      this.packageCss = "rgba-blue-grey-light";
    }else if(this.investor.package === "bronze"){
      this.packageCss = "rgba-brown-light";
    }
  }

  packageCss;
  
}
