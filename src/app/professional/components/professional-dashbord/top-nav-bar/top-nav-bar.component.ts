import { Component, OnInit } from '@angular/core';
import { professionalService } from 'src/app/professional/shared/services/professional.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(
    private professionalService: professionalService
  ) { }

  ngOnInit() {
  }

  tName;

  searchByName(){
    if(this.tName == ''){
      this.professionalService.getMessageInvestor();
      return;
    }
    this.professionalService.sendMessageName(this.tName);
  }

}
