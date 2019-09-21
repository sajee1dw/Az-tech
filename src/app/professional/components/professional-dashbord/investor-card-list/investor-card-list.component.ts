import { Component, OnInit } from '@angular/core';
import { InvestorCard } from 'src/app/professional/shared/models/investor-card.model';
import { professionalService } from 'src/app/professional/shared/services/professional.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-investor-card-list',
  templateUrl: './investor-card-list.component.html',
  styleUrls: ['./investor-card-list.component.css']
})
export class InvestorCardListComponent implements OnInit {

  investorList: InvestorCard[] = [];
  isEmpty: boolean = false;

  message: any;
  subcription: Subscription;

  constructor(
    private professionalService: professionalService
  ) {
    this.subcription = this.professionalService.getMessage().subscribe(list => {
      console.log(list);
      this.investorList = list.investors;
      if (this.investorList.length === 0) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
    })

  }

  tempInvestors: InvestorCard[] = [];
  pageId = 0;

  ngOnInit() {
    // try {
    //   this.professionalService.getAllInvestors()
    //     .subscribe(res => {
    //       this.techerList = res.json().user;
    //       res.json().user.length === 0 ? this.isEmpty = true : this.isEmpty = false;
    //     });
    // } catch (e) {
    //   alert("Something wrong...!");
    // }

    

    /* this.professionalService.newSearch(this.pageId)
      .subscribe(res => {
        let arr = [res.json().gold, res.json().silver, res.json().bronze, res.json().nonBoosted];
        for(let i of arr){
          for(let item of i){
            this.tempInvestors.push(item);
          }
        }

        console.log(this.tempInvestors);

        this.techerList = this.tempInvestors;
      }); */


      this.searchInvestors(0);


  }

  paginate(p){
    this.pageId = p;
    console.log(this.pageId);
    this.searchInvestors(p);
  }



  searchInvestors(p){
    this.tempInvestors = [];
    this.professionalService.newSearch(p)
      .subscribe(res => {
        let arr = [res.json().gold, res.json().silver, res.json().bronze, res.json().nonBoosted];
        for(let i of arr){
          for(let item of i){
            this.tempInvestors.push(item);
          }
        }

        console.log(this.tempInvestors);

        this.investorList = this.tempInvestors;

        // if(this.pageId == 0 && this.techerList.length < 10){
        //   this.enablePagination = false;
        // }
      });
  }

  paginateNext(){
    this.searchInvestors(this.pageId + 1);
    this.pageId++;
  }

  paginatePre(){
    if(this.pageId == 0){
      return;
    }
    this.searchInvestors(this.pageId - 1);
    this.pageId--;
  }


}
