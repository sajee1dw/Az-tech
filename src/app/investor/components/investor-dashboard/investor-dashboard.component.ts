import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { FloatingActionButton } from 'ng2-floating-action-menu';
import { NgFloatingActionButtonModule } from '@ng4746/ng-floating-action-button';

@Component({
  selector: 'app-investor-dashboard',
  templateUrl: './investor-dashboard.component.html',
  styleUrls: ['./investor-dashboard.component.css']
})
export class InvestorDashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    this.config = {
      placment: 'br',
      effect: 'mfb-slidein',
      iconClass: 'fa fa-comment',
      activeIconClass: 'fa fa-comment',
      toggle: 'hover',
      buttons: this.buttons
    };
  }

  ngOnInit() {
  }

  config;
  buttons: Array<NgFloatingActionButtonModule> = [
    {
      iconClass: 'fa fa-android',
      onClick: ()=>{
        //this.router.navigate(['professional/allrequests']);
      }
    },
    {
      iconClass: 'fa fa-address-book',
      onClick: ()=>{
        //this.router.navigate(['professional/investors']);
      }
    },
    {
      iconClass: 'fa fa-cab',
      onClick: ()=>{
        //this.router.navigate(['professional/profile']);
      }
    },
  ];
 
  placements = [
    {
      value: 'br',
      key: 'bottom right'
    },
    {
      value: 'bl',
      key: 'bottom left'
    },
    {
      value: 'tr',
      key: 'top right'
    },
    {
      value: 'tl',
      key: 'top left'
    },
  ];
 
  effects = [
    {
      value: 'mfb-zoomin',
      key: 'Zoom In'
    },
    {
      value: 'mfb-slidein',
      key: 'Slide In + Fade'
    },
    {
      value: 'mfb-fountain',
      key: 'Fountain'
    },
    {
      value: 'mfb-slidein-spring',
      key: 'Slide In (Spring)'
    }
  ];
 
  toggles = [
    'click',
    'hover'
  ];


  toggleTab(tab){
    console.log(tab);
    this.router.navigate(['investor/'+tab]);
  }


}
